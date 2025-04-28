import React from "react";

interface TeamMemberProps {
  image: string;
  name: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      <div className="w-[33%] max-md:w-full max-md:ml-0">
        <img
          src={image}
          className="aspect-[0.95] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:mt-10"
          alt={`${name} profile`}
        />
      </div>
      <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0">
        <div className="text-[rgba(254,254,254,1)] text-lg font-normal leading-[19px] tracking-[-0.36px] self-stretch my-auto max-md:max-w-full max-md:mt-10">
          <span className="font-bold">{name}</span> {description}
        </div>
      </div>
    </div>
  );
};

export const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[1423px] w-full items-center justify-center mt-[135px] px-20 py-[142px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b47021b30a96e5c2b0b6e39922490a3bfb6922?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div className="relative flex mb-[-31px] w-[1095px] max-w-full flex-col max-md:mb-2.5">
        <h2 className="text-[rgba(254,254,254,1)] text-[40px] font-medium leading-none tracking-[-1.6px]">
          About Us
        </h2>
        <div className="flex w-[899px] max-w-full flex-col items-stretch mt-[92px] max-md:mt-10">
          <div className="max-md:max-w-full max-md:mr-1">
            <TeamMember
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/cf9320acf1db1ca55aa73afc466356077e39c7c6?placeholderIfAbsent=true"
              name="Ashwin"
              description="is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
              <br />​<br />
              Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
              <br />"
            />
          </div>
          <div className="mt-[81px] max-md:max-w-full max-md:mt-10">
            <TeamMember
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/d73cb849438ea32c3053e50fffa0a69791142dff?placeholderIfAbsent=true"
              name="Nicole"
              description="is an Executive coach at Mobius specializing in resume builds and career advisory. 
              <br /> <br />
              With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential."
            />
          </div>
          <div className="text-white text-lg font-normal leading-none tracking-[-0.36px] self-center ml-[87px] mt-[59px] max-md:mt-10 cursor-pointer hover:underline">
            Learn more about our Board of Advisors​ ↗
          </div>
          <div className="text-white text-lg font-normal leading-none tracking-[-0.36px] self-center ml-[49px] mt-[30px] cursor-pointer hover:underline">
            Follow us on our Linkedin page ↗
          </div>
        </div>

      </div>
    </section>
  );
};
