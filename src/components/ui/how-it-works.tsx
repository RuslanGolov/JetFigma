"use client";

import {cn} from "@/lib/utils";
import {Layers, Link, MoveRight, Zap} from "lucide-react";
import type React from "react";
import {Button} from "@/components/ui/button";
import Features from "@/components/ui/features";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {
}

// The props for a single step card
interface StepCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    benefits: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
                                               icon,
                                               title,
                                               description,
                                               benefits,
                                           }) => (
    <div
        className={cn(
            "relative rounded-2xl border bg-white p-6 text-card-foreground transition-all duration-300 ease-in-out",
            "hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-slate-50"
        )}
    >
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
            {icon}
        </div>
        {/* Title and Description */}
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-6 text-muted-foreground">{description}</p>
        {/* Benefits List */}
        <ul className="space-y-3">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                </li>
            ))}
        </ul>
    </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
                                                          className,
                                                          ...props
                                                      }) => {
    const stepsData = [
        {
            icon: <Link className="h-6 w-6"/>,
            title: "Authorize Figma in Your IDE",
            description:
                "Sign in to Figma directly from your IDE. Select the design you’re working with.",
            benefits: [
                "Always in sync",
                "Direct access to real design data",
                "Secure by design",
            ],
        },
        {
            icon: <Layers className="h-6 w-6"/>,
            title: "Select the Design You Want to Implement",
            description:
                "Choose the screen, component, or design file you’re ready to turn into code.",
            benefits: [
                "Guaranteed alignment with project requirements",
                "Confidence in component reuse",
                "Built-in style guide compliance",
                "Build consistent UI at scale",
            ],
        },
        {
            icon: <Zap className="h-6 w-6"/>,
            title: "Generate and Apply Project-Aware UI Code",
            description:
                "Generate code that reuses existing components and follows your conventions.",
            benefits: [
                "Faster UI delivery",
                "Consistent codebase",
                "No extra tools, no context switching, no generic output",
            ],
        },
    ];

    return (
        <section
            id="how-it-works"
            className={cn("w-full bg-white pt-16 sm:pt-24", className)}
            {...props}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        How it works
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        By combining Figma design with deep project awareness inside JetBrains IDEs or VS Code,
                        it generates UI code that respects your frameworks, components, and APIs from the start.
                    </p>
                </div>

                <Features/>
            </div>

            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    {/* Step Indicators with Connecting Line */}
                    <div className="relative mx-auto mb-8 w-full max-w-4xl">
                        <div
                            aria-hidden="true"
                            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"
                        ></div>
                        {/* Use grid to align numbers with the card grid below */}
                        <div className="relative grid grid-cols-3">
                            {stepsData.map((_, index) => (
                                <div
                                    key={index}
                                    // Center the number within its grid column
                                    className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-white font-semibold text-foreground ring-4 ring-slate-50"
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Steps Grid */}
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
                        {stepsData.map((step, index) => (
                            <StepCard
                                key={index}
                                icon={step.icon}
                                title={step.title}
                                description={step.description}
                                benefits={step.benefits}
                            />
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 flex justify-center">
                        <Button size="lg" className="gap-4">
                            Sign up for the Alpha <MoveRight className="w-4 h-4"/>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
