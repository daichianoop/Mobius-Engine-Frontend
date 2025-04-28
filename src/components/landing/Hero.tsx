import React from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[858px] w-full pt-[38px] pb-[146px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ce21d2becf6cf2bd2f4ac7b1cad9018eef08eb?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />

      <Navbar />

      <div className="relative self-center mb-[-29px] w-[1304px] max-w-full mt-[167px] max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[69%] max-md:w-full max-md:ml-0">
            <div className="relative flex flex-col text-[rgba(254,254,254,1)] mt-2 max-md:max-w-full max-md:mt-10">
              <h1 className="text-[80px] font-semibold leading-[83px] tracking-[-1.6px] self-stretch max-md:max-w-full max-md:text-[40px] max-md:leading-[46px]">
                Land job interviews
                <br />
                <span className="text-[rgba(6,73,231,1)]">10x</span> faster
              </h1>
              <p className="text-xl font-normal leading-[21px] tracking-[-0.4px] w-[613px] mt-[42px] max-md:max-w-full max-md:mt-10">
                Custom-built resumes that match your goals, keywords, and
                recruiter expectations.
              </p>
              <Link
                href="/"
                className="bg-[rgba(254,254,254,1)] text-[21px] text-[rgba(2,33,131,1)] font-medium tracking-[-1.05px] leading-none mt-[43px] px-[45px] py-6 rounded-[34px] max-md:mt-10 max-md:px-5 inline-block hover:bg-white/90 transition-colors w-56"
              >
                Get Started →
              </Link>
            </div>
          </div>
          <div className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex grow flex-col items-stretch text-[17px] text-white font-medium tracking-[-0.87px] leading-none max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd2e70f53d1cefe8e75e04beba269d7b7c3ffe5f?placeholderIfAbsent=true"
                className="aspect-[0.81] object-contain w-full"
                alt="E-Book cover"
              />
              <div className="self-center mt-2 cursor-pointer hover:underline">
                Download Free E-Book
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
