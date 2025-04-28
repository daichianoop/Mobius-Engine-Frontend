import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export const MobileNav: React.FC = () => {
  return (
      <div className="md:hidden p-6">
        <div className="flex items-center justify-between mb-6">
          <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
              href="/"
              className="text-[rgba(6,73,231,1)] text-xl hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
              href="/about"
              className="text-[rgba(6,73,231,1)] text-xl hover:opacity-80 transition-opacity"
          >
            About Us
          </Link>
          <Link
              href="/plans"
              className="text-[rgba(6,73,231,1)] text-xl hover:opacity-80 transition-opacity"
          >
            Plans
          </Link>
          <Link
              href="/testimonials"
              className="text-[rgba(6,73,231,1)] text-xl hover:opacity-80 transition-opacity"
          >
            Testimonials
          </Link>
          <Link
              href="/privacy-policy"
              className="text-[rgba(6,73,231,1)] text-xl hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>
          <Link
              href="/get-started"
              className="bg-[rgba(6,73,231,1)] text-white px-6 py-3 rounded-3xl hover:bg-[rgba(6,73,231,0.9)] transition-colors text-center"
          >
            Get Started
          </Link>
        </nav>
      </div>
  );
};
