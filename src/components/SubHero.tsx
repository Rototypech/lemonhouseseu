"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function SubHero({ title, subtitle }: { title: string, subtitle?: string }) {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(container.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });

            gsap.from(".subhero-title", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover brightness-50"
            />

            <div className="relative z-10 text-center text-white px-4">
                {subtitle && (
                    <p className="text-sm md:text-base font-medium tracking-widest uppercase text-lemon-primary mb-2">
                        Home / {subtitle}
                    </p>
                )}
                <h1 className="subhero-title text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
                    {title}
                </h1>
            </div>
        </div>
    );
}
