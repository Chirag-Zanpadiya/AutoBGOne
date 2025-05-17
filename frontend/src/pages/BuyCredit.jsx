import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { backendUrl, loadCreditsData } = useContext(AppContext);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payments",
      description: "Credits Payments",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        const token = await getToken();

        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            {
              headers: { token },
            }
          );

          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit Added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken();

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        {
          planId,
        },
        {
          headers: { token },
        }
      );

      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <div className="mt-0 min-h-screen flex items-center justify-center px-2 bg-black">
      <div className="w-full max-w-7xl">
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          Affordable Pricing Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500 border border-red-500 w-full max-w-xs h-[420px]"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{plan.id}</h3>
              <p className="text-3xl font-bold text-red-500 mb-4">
                ₹{plan.price}
              </p>
              <p className="mb-4 text-gray-200">
                Remove background from <strong>{plan.credits} images</strong>
              </p>
              <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>
              <button
                onClick={() => paymentRazorpay(plan.id)}
                className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
