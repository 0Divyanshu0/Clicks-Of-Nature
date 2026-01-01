import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isDark: boolean;
}

export function Header({ activeSection, onNavigate, isDark }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ fixed default

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Journal" },
    { id: "about", label: "About" },
    { id: "collaborate", label: "Stories" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
        isDark
          ? "bg-gray-900/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <span
              className={`text-xl sm:text-2xl tracking-tight ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Clicks_.of_.Nature
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm lg:text-base transition-colors ${
                  activeSection === item.id
                    ? isDark
                      ? "text-white"
                      : "text-black"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute -bottom-[21px] sm:-bottom-[25px] left-0 right-0 h-0.5 ${
                      isDark ? "bg-white" : "bg-black"
                    }`}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 ${isDark ? "text-white" : "text-black"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden py-4 border-t ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 text-base transition-colors ${
                  activeSection === item.id
                    ? isDark
                      ? "text-white bg-gray-800"
                      : "text-black bg-gray-100"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
