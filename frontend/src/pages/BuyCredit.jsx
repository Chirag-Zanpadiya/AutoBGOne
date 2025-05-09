import React from "react";
import { assets , plans } from "../assets/assets";

const BuyCredit = () => {
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
              <p className="text-3xl font-bold text-red-500 mb-4">₹{plan.price}</p>
              <p className="mb-4 text-gray-200">
                Remove background from <strong>{plan.credits} images</strong>
              </p>
              <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition">
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


