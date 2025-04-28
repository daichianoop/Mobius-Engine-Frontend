
import React from "react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  return (
    <nav className="relative flex w-full max-w-[1500px] mx-auto items-center gap-[40px_63px] text-[25px] text-[rgba(254,254,254,1)] font-medium tracking-[-1.25px] leading-none px-4">
      <Link
        href="/"
        className="text-[26px] font-semibold leading-none tracking-[-1.82px] self-stretch my-auto flex items-center gap-2"
      >
        <img
          src="/toplogo.png"
          alt="MobiusEngine Logo"
          className="h-10 w-auto"
        />

      </Link>
      <div className="hidden md:flex self-stretch items-stretch gap-[40px_61px] flex-wrap my-auto">
        <Link href="/" className="grow hover:text-white/80 transition-colors">
          Home
        </Link>
        <Link
            href="/"
            className="basis-auto hover:text-white/80 transition-colors"
        >
          About Us
        </Link>
        <Link href="/"  className="hover:text-white/80 transition-colors">
          Plans
        </Link>
        <Link
            href="/"
            className="basis-auto hover:text-white/80 transition-colors"
        >
          Testimonials
        </Link>
        <Link
            href="/"
            className="basis-auto hover:text-white/80 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="hidden md:flex items-stretch gap-[9px] whitespace-nowrap my-auto cursor-pointer hover:text-white/80 transition-colors">
        <span>More</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14f4222e41af87576b20add46065b93a05a61ebb?placeholderIfAbsent=true"
          className="aspect-[2.2] object-contain w-[11px] shrink-0 my-auto"
          alt="Dropdown arrow"
        />
      </div>
      <Link
          href="/"
          className="hidden md:block bg-[rgba(254,254,254,1)] self-stretch text-[rgba(2,33,131,1)] px-[47px] py-[19px] rounded-[32px] max-md:px-5 hover:bg-white/90 transition-colors"
      >
        Get Started
      </Link>
      <div className="ml-auto">
        <MobileNav />
      </div>
    </nav>
  );
};

