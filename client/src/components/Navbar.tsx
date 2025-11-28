import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#education", label: "Education" },
    { href: "#work", label: "Work" },
    { href: "#entertainment", label: "Entertainment" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-widest text-white hover:text-primary transition-colors">
            IMMERSIVE
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary hover:text-glow transition-all uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <button className="px-6 py-2 bg-primary/10 border border-primary/50 text-primary font-display text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button className="w-full py-3 bg-primary text-black font-bold font-display uppercase tracking-widest">
            Connect Wallet
          </button>
        </motion.div>
      )}
    </nav>
  );
}
