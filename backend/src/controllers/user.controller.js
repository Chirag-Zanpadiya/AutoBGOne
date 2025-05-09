// TODO: API controller function to manage clerk user with databases
// http://localhost:3000/api/user/webhooks
import { Webhook } from "svix";
import { User } from "../models/user.model.js";

const clerkWebhooks = async (req, res) => {
  try {
    // create svix instance with clerk webhooks secret

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

export { clerkWebhooks, userCredits };
