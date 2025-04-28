import React from "react";

interface BenefitCardProps {
    icon: string;
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
                                                     icon,
                                                     title,
                                                     description,
                                                 }) => {
    return (
        <div className="flex size-96 grow flex-col text-[rgba(2,33,131,1)] px-[31px] py-[42px] rounded-[35px] border-[rgba(2,33,131,1)] border-solid border-2 max-md:mt-10 max-md:px-5 h-full">
            <img
                src={icon}
                className="aspect-auto object-contain w-[65px]"
                alt={`${title} icon`}
            />
            <h3 className="text-2xl font-semibold leading-[41px] tracking-[-0.96px] mt-[57px] max-md:mt-10">
                {title}
            </h3>
            <p className="text-lg font-normal leading-[19px] tracking-[-0.36px] self-stretch mt-[22px]">
                {description}
            </p>
        </div>
    );
};

export const WhyChooseUs: React.FC = () => {
    return (
        <section className="bg-[rgba(248,250,255,1)] flex w-full max-w-[1412px] flex-col  mx-auto mt-[150px] px-[55px] py-[66px] rounded-[35px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            {/* Centered heading */}
            <h2 className="text-[rgba(2,33,131,1)] text-[40px] font-bold leading-none tracking-[-1.6px]">
                Why Choose Us?
            </h2>

            <div className="mt-[49px] w-full max-md:mt-10">
                <div className="flex gap-5 justify-evenly">
                    <div className="w-[33%] max-md:w-full">
                        <BenefitCard
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9ea013e4ee4ef73a05a7d04f328c4146295dae22?placeholderIfAbsent=true"
                            title="Tried, Tested, Trusted"
                            description="Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back."
                        />
                    </div>
                    <div className="w-[33%] max-md:w-full">
                        <BenefitCard
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f09bad55337a03cd39cde8ae4f05831483079524?placeholderIfAbsent=true"
                            title="Real People, Real Help"
                            description="A hands-on team that actually cares — guiding you through every twist in your career path."
                        />
                    </div>
                    <div className="w-[33%] max-md:w-full">
                        <BenefitCard
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0aa892bda53ce3c43598c82de4f27c133dc06129?placeholderIfAbsent=true"
                            title="Beat the Line"
                            description="We search, shortlist, and apply for you, so your name shows up first — every single day."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
