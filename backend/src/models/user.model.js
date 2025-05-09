import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      //index lagayi hai taki searching me asani ho
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    photo: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    creditBalance: {
      type: Number,
      default: 3,
    },

    // TODO: chatGPT
    currentPlan: {
      id: {
        type: String,
        enum: ["Basic", "Standard", "Premium", "Pro"],
        default: null,
      },
      creditsPerCycle: Number, // To track and refill on renewal
      isUnlimited: {
        type: Boolean,
        default: false,
      },
    },

    razorpay: {
      customerId: String,
      subscriptionId: String,
      planId: String,
      status: {
        type: String,
        enum: ["active", "cancelled", "paused", "expired"],
        default: null,
      },
      currentPeriodEnd: Date,
    },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
