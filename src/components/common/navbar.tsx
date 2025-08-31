// src/components/Navbar.tsx
import { CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed px-18 top-[var(--navbar-y-padding)] h-[var(--header-height)] left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-center relative">
        {/* Left - Logo */}
        <div className="absolute left-0 text-xl font-bold bg-white rounded-full px-4 py-1">
          <Link to="/">MySaaS</Link>
        </div>

        {/* Middle - Nav Links */}
        <div className="flex space-x-6 py-3 px-6 rounded-full bg-white text-gray-800 font-medium text-[17px]">
          <Link to="#features" className="hover:text-gray-500">
            Features
          </Link>
          <Link to="#pricing" className="hover:text-gray-500">
            Pricing
          </Link>
          <Link to="#blog" className="hover:text-gray-500">
            Blog
          </Link>
          <Link to="#faq" className="hover:text-gray-500">
            Faq
          </Link>
          <Link to="#contact" className="hover:text-gray-500">
            Contact Us
          </Link>
        </div>

        {/* Right - Button */}
        <div className="absolute right-0 flex items-center rounded-full bg-gradient-to-b from-white to-[#ECF0F7] text-gray-800 font-semibold shadow-xl/15 shadow-black py-3.5 px-7">
          Get Template
          <CreditCard className="size-4 ml-1" />
        </div>
      </div>
    </nav>
  );
};
