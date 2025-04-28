import React from "react";
import { Hero } from "@/components/landing/Hero";
import { HowWeWork } from "@/components/landing/HowWeWork";
import { AboutUs } from "@/components/landing/AboutUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { PricingPlans } from "@/components/landing/PricingPlans";
import { ResumeServices } from "@/components/landing/ResumeServices";
import { ContactSection } from "@/components/landing/ContactSection";

export default function Home() {
  return (
      <div className="bg-[rgba(254,254,254,1)] flex flex-col overflow-hidden items-stretch">
        <div className=" mx-auto w-full px-4">
          <Hero />
          <HowWeWork />
          <AboutUs />
          <Testimonials />
          <WhyChooseUs />
          <PricingPlans />
          <ResumeServices />
          <ContactSection />
        </div>
      </div>
  );
};
