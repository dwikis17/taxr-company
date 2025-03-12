import { Button } from "@/components/ui/button";
import { ContentSection } from "./content-section";
import { CustomButton } from "./custom-button";
import Image from "next/image";

export default function HowWorks() {
    return (
        <div className="container mx-auto flex  items-center flex-col py-16 ">
            <h2 className="font-medium text-center text-4xl md:text-6xl">How our {``}
                <span color="black"
                    className="Underline__Container-sc-1m3kxp2-0 jwWybZ relative inline-block">
                    online tax returns{" "}
                    <svg
                        width="217"
                        height="11"
                        viewBox="0 0 217 11"
                        fill="none"
                        className="absolute left-0 -bottom-2 w-full"
                    >
                        <path
                            d="M2 9C108.5 0.995451 217 0.42363 215 4.42597"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        </path>
                    </svg>
                </span>
                {" "}work
            </h2>

            <div className="px-6 max-w-5xl flex flex-col gap-y-2">
                <ContentSection
                    number='/1.svg'
                    title="Answer a few simple questions"
                    description="And we mean a few. After giving us your background info, we'll have everything we need to start preparing your UK tax return."
                    imageSrc="/test.webp"
                    imageAlt="Chat bubble illustration"
                    imageOnRight={true}
                    imageClassName="relative"
                    imageWidth={300}
                    imageHeight={300}
                    className="mb-16"
                />
                <ContentSection
                    number="/2.svg"
                    title="Answer a few simple questions"
                    description="And we mean a few. After giving us your background info, we'll have everything we need to start preparing your UK tax return."
                    imageSrc="/test.webp"
                    imageAlt="Chat bubble illustration"
                    imageOnRight={false}
                    imageClassName="relative"
                    imageWidth={300}
                    imageHeight={300}
                    className="mb-16"
                />
            </div>

            <div className="w-full flex justify-center items-center p-12 text-center bg-purple-100 flex-col gap-y-4">
                <h3 className="font-bold text-2xl md:text-3xl">Just pay a flat fee</h3>

                <Image src="/RP.svg" width={600} height={600} alt="Chat bubble illustration" className="object-contain"
                />
                <p>Taxes as they should be done</p>
                <CustomButton />
            </div>
        </div>
    )
}