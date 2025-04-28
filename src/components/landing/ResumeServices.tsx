import React from "react";
import Link from "next/link";

interface ResumeServiceProps {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
}

const ResumeService: React.FC<ResumeServiceProps> = ({
                                                         title,
                                                         subtitle,
                                                         price,
                                                         features,
                                                     }) => (
    <div className="flex grow flex-col items-center text-lg text-[rgba(6,73,231,1)] font-medium tracking-[-0.72px] leading-[19px] px-8 py-10 rounded-[35px] border-2 border-solid border-[rgba(6,73,231,1)] max-md:max-w-full max-md:mt-10 max-md:px-5 h-full text-center">
        <div className="text-[32px] font-semibold leading-none tracking-[-1.28px]">
            {title}
        </div>
        <div className="mt-2">{subtitle}</div>
        <div
            className="text-[64px] font-semibold leading-none tracking-[-2.56px] mt-12 max-md:text-[40px] max-md:mt-10"
            dangerouslySetInnerHTML={{ __html: price }}
        />
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ddbe0bd59453426a106d445c3fcc03c699ee12c?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full max-w-[328px] mt-12 max-md:mt-10"
            alt="Divider"
        />
        <div className="flex flex-col items-center mt-7 w-full">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`leading-none ${index === 0 ? "mt-0" : "mt-5"}`}
                >
                    {feature}
                </div>
            ))}
        </div>
        <Link
            href="/"
            className="bg-[rgba(6,73,231,1)] text-xl text-white font-semibold tracking-[-0.4px] leading-none mt-10 px-10 py-5 rounded-[36px] hover:bg-[rgba(6,73,231,0.9)] transition-colors text-center"
        >
            Get Started →
        </Link>
    </div>
);

export const ResumeServices: React.FC = () => {
    const resumeRebuildFeatures = [
        "3× 30-min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request",
    ];

    const interviewPrepFeatures = [
        "2× 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical",
    ];

    return (
        <section className="mt-[79px] max-md:mt-10">
            <h2 className="text-[rgba(6,73,231,1)] text-[40px] font-semibold leading-none tracking-[-1.6px] ml-[207px] max-md:ml-5 max-md:text-center">
                Resume Building & Coaching
            </h2>

            <div className="text-[rgba(6,73,231,1)] text-lg font-medium leading-[23px] tracking-[-0.72px] mt-2 ml-[207px] max-md:ml-5 max-md:text-center">
                Let&#39;s talk about where you&#39;re headed — and how your resume can get you there.
                <span className="font-bold"> Schedule a call to get started.</span>
            </div>

            <div className="flex flex-col items-center mt-24 max-md:mt-10">
                <div className="flex flex-wrap justify-center gap-10 w-full max-w-[960px]">
                    <div className="flex-1 min-w-[280px] max-w-[460px]">
                        <ResumeService
                            title="Resume Rebuild"
                            subtitle="Crafted for senior to VP-level professionals ready for their next big step."
                            price='<span style="font-weight:700; font-size:56px;">$1000 </span><span style="font-weight:700; font-size:26px;">one time</span>'
                            features={resumeRebuildFeatures}
                        />
                    </div>
                    <div className="flex-1 min-w-[280px] max-w-[460px]">
                        <ResumeService
                            title="Interview Prep"
                            subtitle="Two sessions to sharpen your story, confidence, and clarity — fast."
                            price='<span style="font-weight:700; font-size:56px;">$500 </span><span style="font-weight:700; font-size:26px;">one time</span>'
                            features={interviewPrepFeatures}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
