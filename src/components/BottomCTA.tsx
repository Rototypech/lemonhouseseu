"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Citrus } from "lucide-react";

export default function BottomCTA() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".cta-circle",
                { scale: 0.8, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 70%",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop"
                alt="Happy people jumping on beach"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Circle Content */}
            <div className="cta-circle relative z-10 bg-lemon-dark/90 text-white rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex flex-col items-center justify-center text-center p-8 border-4 border-lemon-accent shadow-2xl backdrop-blur-sm group hover:scale-105 transition-transform duration-500">
                <div className="mb-4 text-lemon-accent animate-pulse">
                    <Citrus size={40} />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    Lemon <span className="text-lemon-accent">HOUSES</span>
                </h2>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Masz pytania? Zadzwoń!</p>

                <a href="tel:+48578004258" className="text-2xl md:text-4xl font-bold hover:text-lemon-accent transition-colors">
                    +48 578 004 258
                </a>

                <Link
                    href="#contact"
                    className="mt-8 border border-white/30 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-lemon-dark transition-all duration-300"
                >
                    Kontakt
                </Link>
            </div>
        </section>
    );
}
