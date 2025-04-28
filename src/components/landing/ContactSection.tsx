"use client"
import React from "react";

export const ContactSection: React.FC = () => {
  return (
      <section className={"grid place-content-center w-screen"}>
        <div
            className="bg-[rgba(6,73,231,1)] mb-20 w-[1500px] ml-120 text-[rgba(254,254,254,1)] leading-none justify-between mt-28 px-[52px] py-[122px] rounded-[35px] ">
          <div className="flex items-center gap-5 flex-wrap justify-between -mb-6 max-md:max-w-full max-md:mb-2.5">
            <div className="text-[40px] font-medium leading-[42px] tracking-[-1.6px] uppercase my-auto">
              STILL have
              <br/>
              doubts?
            </div>
            <div className="text-[70px] font-semibold tracking-[-3.2px] self-stretch my-auto max-md:text-[40px]">
              Contact us
            </div>
            <button
                className="bg-[rgba(254,254,254,1)] self-stretch text-[58px] text-[rgba(6,73,231,1)] font-normal whitespace-nowrap uppercase tracking-[-2.3px] w-[110px] h-[110px] px-8 rounded-[50%] max-md:text-[40px] max-md:px-5 hover:bg-gray-100 transition-colors flex items-center justify-center"
                aria-label="Contact us"
            >
              →
            </button>
          </div>
        </div>
      </section>
  );
};
