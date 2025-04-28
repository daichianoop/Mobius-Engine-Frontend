import React from "react";
import Link from "next/link";

interface PricingFeatureProps {
    text: string;
    className?: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({
                                                           text,
                                                           className = "",
                                                       }) => (
    <div className={`${className} text-left flex items-center`}>
        <span className="text-green-500 mr-2">✔</span>
        {text}
    </div>
);

interface BasicPlanProps {
    title: string;
    price: string;
    popular?: boolean;
    features: string[];
    className?: string;
    featureClassName?: string;
}

const BasicPlan: React.FC<BasicPlanProps> = ({
                                                 title,
                                                 price,
                                                 popular = false,
                                                 features,
                                                 className = "",
                                                 featureClassName = "mt-5",
                                             }) => (
    <div
        className={`flex flex-col justify-between items-center text-lg text-[rgba(6,73,231,1)] font-medium tracking-[-0.72px] leading-[19px] px-8 py-10 rounded-[35px] border-2 border-solid border-[rgba(6,73,231,1)] w-full h-full ${className}`}
    >
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-between w-full">
                <h3 className="text-[32px] font-semibold leading-none tracking-[-1.28px]">
                    {title}
                </h3>
                {popular && (
                    <div className="bg-[rgba(235,241,255,1)] border text-base font-medium tracking-[-0.32px] leading-none px-4 py-2 rounded-[35px] border-[rgba(6,73,231,1)]">
                        Popular
                    </div>
                )}
            </div>
            <div
                className="text-[64px] font-semibold leading-none tracking-[-2.56px] mt-10 text-center"
                dangerouslySetInnerHTML={{ __html: price }}
            />
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ddbe0bd59453426a106d445c3fcc03c699ee12c?placeholderIfAbsent=true"
                className="aspect-[333.33] object-contain w-full mt-10"
                alt="Divider"
            />
            <div className="flex flex-col items-start w-full mt-5">
                {features.map((feature, index) => (
                    <PricingFeature
                        key={index}
                        text={feature}
                        className={index === 0 ? "mt-7" : featureClassName}
                    />
                ))}
            </div>
        </div>
        <Link
            href="/"
            className="bg-[rgba(6,73,231,1)] text-xl text-white font-semibold tracking-[-0.4px] leading-none mt-10 px-10 py-5 rounded-[36px] hover:bg-[rgba(6,73,231,0.9)] transition-colors text-center"
        >
            Get Started →
        </Link>
    </div>
);

const AdvancedPlan: React.FC = () => {
    const advancedFeatures = [
        "Everything in Plus",
        "Custom Resumes & Cover Letters",
        "20 customized applications/week",
        "Help with complex job searches",
        "Access to senior resume experts, Founder & Exec Coaches"
    ];

    return (
        <div className="bg-[rgba(6,73,231,1)] flex flex-col md:flex-row w-full max-w-[1300px] mx-auto gap-10 font-semibold text-white p-10 rounded-[35px] mt-20">
            <div className="flex flex-col text-lg tracking-[-0.72px] leading-none w-full md:w-2/3">
                <h3 className="text-[32px] leading-none tracking-[-1.28px]">Advance</h3>
                <p className="mt-2">Top-tier support for serious job hunters:</p>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/13830ca13f88392576fb998ffc49a9ed0362aa9e?placeholderIfAbsent=true"
                    className="aspect-[333.33] object-contain w-full mt-10"
                    alt="Divider"
                />
                <div className="flex flex-wrap gap-5 font-medium mt-9 pl-5">
                    {advancedFeatures.map((feature, index) => (
                        <PricingFeature
                            key={index}
                            text={feature}
                            className={index === 0 ? "mt-7" : "mt-5"}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-between items-end w-full md:w-1/3">
                <div className="text-[64px] font-bold leading-none tracking-[-2.56px] text-right">
                    <span className="text-[56px]">$150</span>
                    <span className="text-[26px]">/week</span>
                </div>
                <Link
                    href="/"
                    className="bg-white text-[rgba(6,73,231,1)] text-xl tracking-[-0.4px] leading-none mt-10 px-10 py-5 rounded-[36px] hover:bg-gray-100 transition-colors"
                >
                    Get Started →
                </Link>
            </div>
        </div>
    );
};

export const PricingPlans: React.FC = () => {
    const promoFeatures = [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $1.5 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles",
    ];

    const starterFeatures = [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $1.5 each",
        "Analyst support within 6 hours (SLA/PST hours)",
    ];

    const plusFeatures = [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
    ];

    return (
        <section className="flex flex-col items-center mt-28 max-md:mt-10">
            <div className="text-[rgba(6,73,231,1)] text-[40px] font-semibold leading-none tracking-[-1.6px] mb-20 w-screen ">
                Job Application Service Plans
            </div>

            <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1300px]">
                <div className="flex-1 min-w-[280px] max-w-[400px]">
                    <BasicPlan
                        title="April Promo"
                        price='<span style="font-weight:700; font-size:56px;">$35</span><span style="font-weight:700; font-size:26px;">/week</span>'
                        features={promoFeatures}
                    />
                </div>

                <div className="flex-1 min-w-[280px] max-w-[400px]">
                    <BasicPlan
                        title="Starter"
                        price='<span style="font-weight:700; font-size:56px;">$50</span><span style="font-weight:700; font-size:26px;">/week</span>'
                        popular
                        features={starterFeatures}
                        className="bg-[rgba(248,250,255,1)]"
                        featureClassName="text-lg font-medium leading-[19px] tracking-[-0.72px] mt-4"
                    />
                </div>

                <div className="flex-1 min-w-[280px] max-w-[400px]">
                    <BasicPlan
                        title="Plus"
                        price='<span style="font-weight:700; font-size:56px;">$100</span><span style="font-weight:700; font-size:26px;">/week</span>'
                        features={plusFeatures}
                        featureClassName="font-medium mt-4"
                    />
                </div>
            </div>

            <AdvancedPlan />

            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/552e49a184c278d3abfed07b7f0a6ce352c24adc?placeholderIfAbsent=true"
                className="object-contain w-full max-w-[1300px] mt-20"
                alt="Divider"
            />
        </section>
    );
};
