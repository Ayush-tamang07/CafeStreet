import React from "react";
// import logo from "../../public/logo.png"
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function Header() {
  return (
    <header className="flex justify-between items-center px-16 py-3">
      {/* Logo Section */}
      <img src="/logo.png" alt="logo" width={75} />

      {/* Navigation Section */}
      <nav>
        <ul className="flex gap-10 text-lg">
          <li className="text-[#FF902A]">About Us</li>
          <li>Our Product</li>
          <li>Delivery</li>
        </ul>
      </nav>

      {/* Search and Cart Section */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="coffee"
          className="px-4 py-2 w-64 rounded-3xl focus:outline-none border-none"
        />

        <PiShoppingCartSimpleLight size={24} />
      </div>
    </header>
  );
}

export default Header;
