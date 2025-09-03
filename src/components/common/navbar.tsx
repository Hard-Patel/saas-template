// src/components/Navbar.tsx
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blogs" },
    { label: "Faq", href: "/#faq" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="fixed left-0 w-full z-50 bg-transparent">
      <div className="flex py-[calc(var(--navbar-y-padding)/2)] backdrop-blur-md xl:backdrop-blur-none xl:pt-[var(--navbar-y-padding)] items-center justify-between relative bg-[#F0F1F5]/30 xl:bg-transparent px-3 sm:px-8 md:px-18">
        {/* Left - Logo */}
        <div
          className="text-3xl xl:text-xl font-bold xl:bg-white rounded-full px-4 py-2"
          onClick={() => {
            setMenuOpen(false);
            navigate("/");
          }}
        >
          <img src={logo} />
        </div>

        {/* Desktop - Nav Links */}
        <div className="hidden xl:flex space-x-6 py-3 px-6 rounded-full bg-white text-gray-800 font-medium text-[17px]">
          {navLinks.map((link) => {
            const isSection =
              link.href.startsWith("/#") || link.href.startsWith("#");

            return (
              <button
                key={link.href}
                onClick={() => {
                  window.location.href = link.href;
                }}
                className="hover:text-gray-500"
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Desktop - Button */}
        <a target="_blank" href="https://x.com/Hardpatel2602">
          <div className="hidden xl:flex items-center rounded-full bg-gradient-to-b from-white to-[#ECF0F7] text-gray-800 font-semibold shadow-xl/15 shadow-black py-3.5 px-7">
            Connect on X{/* <CreditCard className="size-4 ml-1" /> */}
          </div>
        </a>

        {/* Mobile - Menu Icon */}
        <button
          className="xl:hidden p-2 rounded-md bg-white shadow-md"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile - Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden pt-3 rounded-xl bg-[#F0F1F5] shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 text-gray-800 font-medium text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-gray-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Button inside menu */}
              <button className="w-full flex items-center justify-center rounded-full bg-gradient-to-b from-white to-[#ECF0F7] text-gray-800 font-semibold shadow-md py-3">
                Connect on X{/* <CreditCard className="size-4 ml-1" /> */}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
