import React from "react";
import Link from "next/link";

interface TestimonialCardProps {
  text: React.ReactNode;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text }) => {
  return (
      <div className="bg-[rgba(6,73,231,1)] grow font-normal w-full pb-[22px] rounded-[35px] max-md:mt-10">
        <div className="bg-white flex shrink-0 h-[263px] rounded-[35px] border-[2px] border-[rgba(6,73,231,1)]" />
        <div className="flex flex-col items-stretch mt-[22px] px-5">
          <div className="text-white text-xl leading-[21px] tracking-[-0.4px] max-md:mr-2.5">
            {text}
          </div>
          <div className="bg-white w-[57px] h-[57px] text-[26px] text-[rgba(6,73,231,1)] rounded-full mt-[23px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
            ↗
          </div>
        </div>
      </div>
  );
};

export const Testimonials: React.FC = () => {
  const testimonialText = (
      <>
        Holly is a <span className="font-bold">senior executive</span> who got over <span className="font-bold">10 job interviews</span> and an offer she accepted
      </>
  );

  return (
      <section className="flex flex-col w-full z-10 max-w-[1610px] mx-auto px-4">
        <h2 className="text-[rgba(6,73,231,1)] text-4xl font-bold mt-32 mb-10 text-left px-36">
          What our clients have to say
        </h2>

        {/* Cards CENTERED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1295px] self-center">
          <TestimonialCard text={testimonialText} />
          <TestimonialCard text={testimonialText} />
          <TestimonialCard text={testimonialText} />
        </div>

        {/* Buttons CENTERED */}
        <div className="flex flex-wrap justify-center gap-[40px_78px] text-xl tracking-[-0.4px] leading-none mt-[78px] max-md:mt-10 self-center">
          <Link
              href="/"
              className="bg-white text-[rgba(6,73,231,1)] font-normal px-[42px] py-[21px] rounded-[36px] border-2 border-[rgba(6,73,231,1)] hover:bg-gray-50 transition-colors"
          >
            More customer testimonials ↗
          </Link>
          <Link
              href="/"
              className="bg-[rgba(6,73,231,1)] text-white font-semibold px-[41px] py-[21px] rounded-[36px] hover:bg-[rgba(6,73,231,0.9)] transition-colors"
          >
            Get Started →
          </Link>
        </div>
      </section>
  );
};
