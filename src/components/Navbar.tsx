import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import navantaLogo from "@/assets/navanta-logo.png";

const navKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.process", path: "/process" },
  { key: "nav.standards", path: "/standards" },
  { key: "nav.contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.07)",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-6 lg:px-10" style={{ height: 64 }}>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={navantaLogo} alt="Navanta Solar" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navKeys.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 hover:text-primary"
              style={{
                color: location.pathname === item.path ? "#0A2540" : "#0A2540cc",
              }}
            >
              {t(item.key)}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link to="/contact" className="ml-5">
            <button
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "#F59E0B",
                boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#D97706")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#F59E0B")}
            >
              {t("nav.getAssessment")}
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: "#0A2540" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(14px)",
              borderTop: "1px solid rgba(0, 0, 0, 0.05)",
            }}
            className="md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navKeys.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors"
                  style={{
                    color: location.pathname === item.path ? "#0A2540" : "#0A2540bb",
                    borderLeft: location.pathname === item.path ? "3px solid #F59E0B" : "3px solid transparent",
                  }}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2">
                <button
                  className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-white"
                  style={{
                    background: "#F59E0B",
                    boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
                  }}
                >
                  {t("nav.getAssessment")}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
