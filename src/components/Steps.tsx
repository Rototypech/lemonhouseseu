"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Binoculars, Signpost, BedDouble } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        icon: Binoculars,
        title: "Zobacz co oferujemy",
    },
    {
        icon: Signpost,
        title: "Wybierz odpowiedni domek",
    },
    {
        icon: BedDouble,
        title: "Skontaktuj się z nami",
        description: "Aby zarezerwować pobyt w dogodnym dla Ciebie terminie",
    },
];

export default function Steps() {
    const container = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                },
            });

            tl.fromTo(".step-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "power3.out",
                }
            );

            // Animate connecting lines if possible, or just let them be static
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-lemon-dark text-white relative overflow-hidden">
            {/* Background Texture/Image Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-lemon-accent font-bold tracking-widest uppercase text-sm">Proces Rezerwacji</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">TYLKO 3 KROKI</h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="step-item flex flex-col items-center group">
                            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center mb-6 group-hover:border-lemon-primary group-hover:bg-gray-700 transition-all duration-300 relative z-10">
                                <step.icon size={40} className="text-white group-hover:text-lemon-primary transition-colors" />

                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-lemon-primary flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            {step.description && (
                                <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
