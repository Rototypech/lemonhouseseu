"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Citrus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function OfferIntro() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".intro-content",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(".intro-image",
                { scale: 0.9, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 justify-between">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left intro-content">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-lemon-accent mb-4">
                            <Citrus size={24} />
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">LEMON HOUSES IN GREECE</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-display font-bold text-lemon-dark leading-tight intro-content">
                            Wyjątkowe miejsce do wypoczynku
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed intro-content">
                            Posiadamy do wynajęcia 2 domy wolnostojące, z własną przestrzenią do
                            organizowania sobie odpoczynku i relaksu oraz 6 apartamentów,
                            położonych obok siebie w bezpośrednim sąsiedztwie Morza Egejskiego...
                        </p>

                        <div className="intro-content">
                            <Link
                                href="#about"
                                className="inline-block px-8 py-3 rounded-full border border-lemon-primary text-lemon-primary font-medium hover:bg-lemon-primary hover:text-white transition-all duration-300"
                            >
                                O nas
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-5/12 intro-image">
                        <div className="relative aspect-video rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/lemononthetable.svg"
                                alt="Lemons on table"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
