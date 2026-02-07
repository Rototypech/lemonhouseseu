"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const heroImages = [
    "/images/hero.svg",
    "/images/hero2.svg",
    "/images/hero3.svg",
];

export default function Hero() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.fromTo(container.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.inOut",
                }
            )
                .fromTo(titleRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                    }, "-=1"
                )
                .fromTo(subtitleRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    }, "-=0.8"
                )
                .fromTo(".subtext-anim",
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    }, "-=0.8"
                )
                .fromTo(btnRef.current,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "back.out(1.7)",
                    }, "-=0.8"
                );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Images Slider */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover brightness-75"
                        />
                    </div>
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10" />
            </div>

            {/* Content */}
            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto flex flex-col items-center">
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-none drop-shadow-xl mb-4">
                    Odkryj Grecję
                </h1>
                <h2 ref={subtitleRef} className="text-4xl md:text-6xl font-display font-bold text-lemon-accent tracking-wide mb-4 drop-shadow-md">
                    Odkryj Attykę
                </h2>
                <p className="text-xl md:text-2xl font-light text-white/90 tracking-[0.2em] font-sans subtext-anim mb-12 uppercase">
                    Odkryj Artemidę
                </p>

                <div ref={btnRef}>
                    <Link
                        href="#offer"
                        className="inline-flex items-center justify-center bg-lemon-primary hover:bg-lemon-dark text-white px-10 py-4 rounded-sm shadow-2xl transition-all transform hover:scale-105 font-bold tracking-[0.2em] text-xs uppercase border border-lemon-primary hover:border-lemon-dark"
                    >
                        Sprawdź Ofertę
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>

            {/* Slider Dots/Indicators */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? "bg-lemon-primary w-6" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
