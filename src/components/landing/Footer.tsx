import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
      <footer className="bg-[#FEFEFE] ">
        <div className="flex flex-col px-25 py-15 pt-40">
          <Link
              href="/"
              className="text-[rgba(6,73,231,1)] text-[25px] font-semibold leading-none tracking-[-1.77px]"
          >
            <img src="/bottomlogo.png" alt="Mobius Logo" className="max-w-[200px]" />
          </Link>
          <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13830ca13f88392576fb998ffc49a9ed0362aa9e?placeholderIfAbsent=true"
              className="aspect-[333.33] object-contain w-[392px] max-w-full mt-10"
              alt="Divider"
          />
          <div className="flex w-full gap-5 flex-wrap justify-between mt-[39px] max-md:max-w-full">
            <div className="flex gap-[40px_100px] text-[rgba(6,73,231,1)] flex-wrap max-md:max-w-full">
              <div className="self-stretch flex flex-col items-stretch">
                <div className="text-base font-semibold leading-none tracking-[-0.64px] underline">
                  Address
                </div>
                <address className="text-lg font-medium leading-[19px] tracking-[-0.72px] mt-3 not-italic">
                  1875 Mission St Ste 103 #450
                  <br />
                  San Francisco, CA 94103
                </address>
              </div>
              <div className="flex flex-col items-stretch whitespace-nowrap underline leading-none">
                <div className="text-base font-semibold tracking-[-0.64px]">Email</div>
                <a
                    href="mailto:finance@mobiusengine.ai"
                    className="text-lg font-medium tracking-[-0.72px] mt-3 hover:text-[rgba(6,73,231,0.8)] transition-colors"
                >
                  finance@mobiusengine.ai
                </a>
              </div>
              <div className="flex flex-col items-stretch whitespace-nowrap leading-none">
                <div className="text-base font-semibold tracking-[-0.64px] underline">
                  Telephone
                </div>
                <a
                    href="tel:6508896026"
                    className="text-lg font-medium tracking-[-0.72px] mt-3 hover:text-[rgba(6,73,231,0.8)] transition-colors"
                >
                  650-889-6026
                </a>
              </div>
            </div>
            <div className="flex flex-col items-stretch mt-2.5 mr-15">
              <div className="text-[rgba(6,73,231,1)] text-base font-semibold leading-none tracking-[-0.64px] underline">
                Socials
              </div>
              <div className="flex items-stretch gap-3 mt-4">
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce89909220cccb99d71385ed261633d7ecf0e26c?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[45px] shrink-0 rounded-[50%] hover:opacity-80 transition-opacity"
                      alt="LinkedIn"
                  />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f99e123788cb486f7992d615d28b0a3d6ba4f9ec?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[45px] shrink-0 rounded-[50%] hover:opacity-80 transition-opacity"
                      alt="Twitter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(6,73,231,1)] flex w-full flex-col items-center text-base text-[rgba(254,254,254,1)] font-medium tracking-[-0.64px] leading-none justify-center px-[70px] py-[26px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="flex w-full max-w-[1714px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
            <div>© 2023 Mobiusservices LLC</div>
            <div className="flex items-stretch gap-[40px_62px] text-right">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Terms & Conditions
              </Link>
              <Link
                  href="/"
                  className="hover:text-white/80 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};
