"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BedDouble, Car, CircleDollarSign } from "lucide-react";
import { useRef } from "react";

const features = [
    {
        icon: BedDouble,
        label: "KOMFORT I WYGODA",
        title: "POMIEŚCI AŻ DO 7 OSÓB",
        color: "text-lemon-accent",
    },
    {
        icon: CircleDollarSign,
        label: "DOSKONAŁA CENA",
        title: "CENA/JAKOŚĆ = 10/10",
        color: "text-lemon-accent",
    },
    {
        icon: Car,
        label: "MOBILNOŚĆ",
        title: "SAMOCHÓD DO DYSPOZYCJI",
        color: "text-lemon-accent",
    },
];

export default function Features() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".feature-card",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-lemon-accent rounded-full blur-[100px]" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-lemon-primary rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card group p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-lemon-accent/20 hover:bg-white hover:shadow-2xl hover:shadow-lemon-dark/5 transition-all duration-500 cursor-default">
                            <div className={`mb-6 p-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-lemon-primary group-hover:text-white transition-all duration-500 ${feature.color}`}>
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-3 block uppercase group-hover:text-lemon-accent transition-colors">
                                {feature.label}
                            </span>
                            <h3 className="text-2xl font-display font-bold text-lemon-dark mb-4 group-hover:translate-x-1 transition-transform">
                                {feature.title}
                            </h3>
                            <div className="w-12 h-1 bg-gray-200 group-hover:bg-lemon-accent transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
