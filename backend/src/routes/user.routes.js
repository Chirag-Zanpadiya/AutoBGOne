import express from "express";
import {
  clerkWebhooks,
  paymentRazorpay,
  userCredits,
  verifyRazorpay,
} from "../controllers/user.controller.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks",  clerkWebhooks);

// TODO: yaha pe basically jab user authenticated hoga tab bhi usko credits dikhane chahiye isliye middleware insert kiya authUser
userRouter.get("/credits", authUser, userCredits);
userRouter.post("/pay-razor", authUser, paymentRazorpay);
userRouter.post("/verify-razor" , verifyRazorpay)
export default userRouter;
