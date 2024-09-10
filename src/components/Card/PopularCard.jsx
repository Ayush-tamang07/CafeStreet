import React from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function PopularCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
      {/* Image */}
      <img
        src="https://coffeecups.co.uk/cdn/shop/collections/barista-530948.jpg?v=1697022171&width=1500"
        alt="cup"
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Text Content */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">Vanilla Latte</span>
        <span className="text-gray-500 text-sm">21 K</span>
      </div>

      {/* Buttons and Cart Icon */}
      <div className="flex items-center justify-between mt-4">
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-5 py-1 border-2 border-[#FF902A] rounded-lg text-[#FF902A] font-bold text-lg">
            Hot
          </button>
          <button className="px-5 py-1 border-2 border-[#FFD28F] rounded-lg text-[#FFD28F] font-bold text-lg">
            Cold
          </button>
        </div>

        {/* Shopping Cart Icon */}
        <PiShoppingCartSimpleLight
          size={28}
          className="text-gray-700 cursor-pointer hover:text-gray-900 transition"
        />
      </div>
    </div>
  );
}

export default PopularCard;
