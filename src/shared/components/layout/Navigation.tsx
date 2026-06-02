"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { NAVIGATION } from "../../lib/constants";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-0.5 w-full justify-end">
        {NAVIGATION.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative"
          >
            <Link
              href={item.href}
              className={cn(
                "px-4 py-2 font-garamond text-sm tracking-wide transition-colors duration-300 relative block",
                pathname === item.href
                  ? "text-gold-400"
                  : "text-parchment-100/75 hover:text-gold-300"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #D4AF77, transparent)" }}
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <motion.button
        className="md:hidden relative z-50 p-2 rounded-sm transition-colors"
        style={{ border: "1px solid rgba(212,175,119,0.3)" }}
        onClick={toggleMenu}
        whileTap={{ scale: 0.93 }}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <motion.span
            className="w-full h-px origin-center"
            style={{ background: "#F5E8C7" }}
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="w-full h-px"
            style={{ background: "#F5E8C7" }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-full h-px origin-center"
            style={{ background: "#F5E8C7" }}
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </motion.button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <div className="absolute inset-0 bg-marble-900/60 backdrop-blur-sm" />
            <motion.nav
              className="absolute top-0 right-0 h-full w-64"
              style={{
                background: "rgba(20, 16, 12, 0.97)",
                borderLeft: "1px solid rgba(212,175,119,0.25)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-24 flex flex-col gap-1">
                {NAVIGATION.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 font-garamond text-base transition-colors duration-200 border-b",
                        pathname === item.href
                          ? "text-gold-400 border-gold-700/40"
                          : "text-parchment-100/70 hover:text-gold-300 border-transparent hover:border-gold-700/30"
                      )}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
