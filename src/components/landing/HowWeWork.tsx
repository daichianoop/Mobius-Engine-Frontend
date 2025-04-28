import React from "react";

interface WorkStepProps {
  number: string;
  title: string;
}

const WorkStep: React.FC<WorkStepProps> = ({ number, title }) => {
  return (
    <div className="flex flex-col leading-none max-md:mt-10">
      <div
        className={`w-[82px] text-[56px] text-black font-normal whitespace-nowrap tracking-[-1.12px] ${
          number === "2" || number === "3" ? "text-center" : ""
        } ${
          number === "2"
            ? "px-[25px]"
            : number === "3"
              ? "px-6"
              : number === "4"
                ? "px-[23px] text-center"
                : "px-[31px]"
        } py-3 rounded-[50%] border-[rgba(2,33,131,1)] border-solid border-2 max-md:text-[40px] max-md:px-5`}
      >
        {number}
      </div>
      <div className="w-[213px] shrink-0 h-0.5 mt-[19px] border-[rgba(6,73,231,1)] border-solid border-2" />
      <div className="text-[rgba(6,73,231,1)] text-[26px] font-medium tracking-[-0.52px] self-stretch mt-[27px]">
        {title}
      </div>
    </div>
  );
};

export const HowWeWork: React.FC = () => {
  return (
      <div className={"grid place-content-center"}>
          <section className="self-center flex w-[1301px] max-w-full flex-col items-stretch mt-[73px] max-md:mt-10">
              <h2 className="text-[rgba(6,73,231,1)] text-[40px] font-medium leading-none tracking-[-1.6px]">
                  How we work?
              </h2>
              <div className="mt-[108px] max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                      <div className="w-3/12 max-md:w-full max-md:ml-0">
                          <WorkStep number="1" title="Submit Intake Form"/>
                      </div>
                      <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col max-md:mt-10">
                              <WorkStep
                                  number="2"
                                  title="We do the search and curation for list of jobs"
                              />
                          </div>
                      </div>
                      <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col max-md:mt-10">
                              <WorkStep
                                  number="3"
                                  title="You approve, we do the tedious part (applying)"
                              />
                          </div>
                      </div>
                      <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                          <WorkStep number="4" title="You get the interviews"/>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};
