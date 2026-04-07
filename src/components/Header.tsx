"use client";

import { LogoFull } from "./Logo";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="ReviewPing home">
          <LogoFull />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() =>
              document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
          >
            FAQ
          </button>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
          >
            Dashboard
          </Link>
          <a
            href="#payment"
            className="inline-flex items-center px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                setMobileOpen(false);
              }}
              className="text-sm font-medium text-gray-600 py-2 text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                setMobileOpen(false);
              }}
              className="text-sm font-medium text-gray-600 py-2 text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                setMobileOpen(false);
              }}
              className="text-sm font-medium text-gray-600 py-2 text-left"
            >
              FAQ
            </button>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
            <a
              href="#payment"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-green text-white text-sm font-semibold rounded-lg"
            >
              Get Started — $29/mo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
