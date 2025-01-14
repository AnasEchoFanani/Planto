import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      const timer = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Plants Type", path: "/plants" },
    { label: "More", path: "/more" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
        className={`absolute right-0 top-0 h-full w-full sm:max-w-md bg-black/80 backdrop-blur-xl border-l border-white/10 p-4 md:p-6 transition-transform duration-500 will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-green-400 transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-4 md:space-y-6">
              {menuItems.map((item, index) => (
                <li
                  key={item.path}
                  className={`transition-all duration-500 delay-[${index * 100}ms] ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="text-2xl md:text-3xl font-medium text-white hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 transform transition-all duration-500"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "400ms",
            }}
          >
            <div className="flex flex-col gap-4">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition-colors">
                Sign In
              </button>
              <button className="w-full border border-white/10 hover:bg-white/5 text-white py-3 rounded-full transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
