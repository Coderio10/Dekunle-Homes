"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          solid ? "bg-navy/97 backdrop-blur py-3 shadow-card" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-container mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" aria-label="Dekunle Homes and Properties, home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 text-[14.5px] font-medium hover:text-white transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary">
              Partner With Us
            </Button>
          </div>

          <button
            aria-label="Open menu"
            className="lg:hidden text-white w-12 h-12 flex items-center justify-center -mr-3"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-[1200] bg-navy flex flex-col justify-center gap-8 px-10"
          >
            <button
              aria-label="Close menu"
              className="absolute top-6 right-6 text-white w-12 h-12 flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <X size={26} />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white font-display text-3xl font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-4 w-fit" onClick={() => setOpen(false)}>
              Partner With Us
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
