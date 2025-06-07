// TODO: API controller function to manage clerk user with databases
// http://localhost:3000/api/user/webhooks
import { Ordering, Webhook } from "svix";
import { User } from "../models/user.model.js";
import razorpay from "razorpay";
import { Transaction } from "../models/transaction.model.js";
const clerkWebhooks = async (req, res) => {
  try {
    // create svix instance with clerk webhooks secret
   console.log("user.controller.js :: clerkwebhooks :: req.body ::", req.body);

    

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        console.log("user.controller.js ::  New user created:", userData);

        await User.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }
      default:
        break;
    }
  } catch (error) {
    //
    console.log(
      `src :: controllers :: user.controller.js :: clerkWebhooks :: error :: ${error.message}`
    );

    res.json({ success: false, message: error.message });
  }
};

// TODO: API controller function to get user avaiable credit and name

const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;
    // const { clerkId } = req.clerkId;

    console.log(`controller :: user.controller.js :: userCredits :: clerkID`);
    console.log(clerkId);

    if (!clerkId) {
      return res.json({ success: false, message: "Clerk ID is required" });
    }

    const userData = await User.findOne({ clerkId });

    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.log(
      `src :: controllers :: user.controller.js :: userCredits :: error :: ${error.message}`
    );

    res.json({ success: false, message: error.message });
  }
};

// GateWay Initialize

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// API to make payment for credits

const paymentRazorpay = async (req, res) => {
  try {
    const { clerkId, planId } = req.body;

    if (!clerkId || !planId) {
      return res.json({
        success: false,
        message: "Invalid request. Missing clerkId or planId.",
      });
    }

    const userData = await User.findOne({ clerkId });

    if (!userData || !planId) {
      return res.json({
        success: false,
        message: "Invalid Credential Or Low Creadit Balance",
      });
    }

    // jab bhi user koi bhi plan buy karega toh uski credits kitni lee hai , konsa plan hai , kitna amout , konsi date me liya hai wo sab

    let credits, plan, amount, date, isUnlimited;
    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 2;
        amount = 15;
        isUnlimited = false;
        break;

      case "Standard":
        plan = "Standard";
        credits = 4;
        amount = 19;
        isUnlimited = false;

        break;

      case "Premium":
        plan = "Premium";
        credits = 10;
        amount = 49;
        isUnlimited = false;
        break;

      case "Pro":
        plan = "Pro";
        credits = 0;
        amount = 250;
        isUnlimited = true;

        break;
      default:
        return res.json({
          success: false,
          message: "Invalid plan selected.",
        });
        break;
    }

    date = isUnlimited
      ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      : Date.now();

    // Update user data with the selected plan
    userData.currentPlan = {
      id: plan,
      creditsPerCycle: credits,
      isUnlimited,
    };

    // If the user has a Pro plan, update their razorpay subscription details
    if (isUnlimited) {
      userData.razorpay = {
        planId: plan,
        status: "active",
        currentPeriodEnd: date, // Set the expiration date for Pro plan
      };
    }
    userData.currentPlan = {
      id: plan,
      creditsPerCycle: credits,
      isUnlimited,
    };
    // Save the updated user data
    await userData.save();

    // creating transaction
    const transactionData = {
      clerkId,
      plan,
      amount,
      credits,
      payment: false,
      date,
    };

    const newTransaction = await Transaction.create(transactionData);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res.json({ success: false, message: error });
      }

      res.json({ success: true, order: order });
    });
  } catch (error) {
    console.log(
      `src :: controllers :: user.controller.js :: paymentRazorpay :: error :: ${error.message}`
    );

    res.json({ success: false, message: error.message });
  }
};

// API controller fns to verify razorpay payment

const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      const transactionData = await Transaction.findById(orderInfo.receipt);

      if (transactionData.payment) {
        return res.json({ success: false, message: "Payment Failed" });
      }
      // adding credits into userdata
      const userData = await User.findOne({ clerkId: transactionData.clerkId });

      console.log(`transactionData.credits`);
      console.log(transactionData.credits);

      console.log(`transactionData.credits`);
      console.log(userData.creditBalance);

      const creditBalance = userData.creditBalance + transactionData.credits;

      await User.findByIdAndUpdate(userData._id, {
        creditBalance,
      });

      // making payment true

      await Transaction.findByIdAndUpdate(transactionData._id, {
        payment: true,
      });

      res.json({ success: true, message: "Credits Added" });
    }
  } catch (error) {
    console.log(
      `src :: controllers :: user.controller.js :: verifyRazorpay :: error :: ${error.message}`
    );

    res.json({ success: false, message: error.message });
  }
};

export { clerkWebhooks, userCredits, paymentRazorpay, verifyRazorpay };
