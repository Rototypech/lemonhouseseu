"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MoveRight } from "lucide-react";

export default function Intro() {
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
                { scale: 0.95, opacity: 0 },
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
        <section ref={container} className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8 intro-content">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-lemon-dark"></div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-lemon-primary">
                                Wyjątkowa Atmosfera
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-display font-bold text-lemon-dark leading-[1.1]">
                            Odpocznij w sercu <br />
                            <span className="text-lemon-primary">greckiej natury</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                            Nasze domy zaprojektowaliśmy tak, aby łączyć nowoczesny komfort z tradycyjnym greckim stylem. Otoczone gajami oliwnymi i cytrusowymi, zapewniają idealne warunki do regeneracji sił.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                            Każdy poranek witamy zapachem świeżych cytryn i morskiej bryzy. To miejsce, gdzie czas płynie wolniej.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="#about"
                                className="inline-flex items-center gap-3 text-lemon-dark font-bold hover:text-lemon-primary transition-colors group"
                            >
                                <span className="uppercase tracking-widest text-sm border-b border-lemon-dark group-hover:border-lemon-primary pb-1 transition-all">Poznaj naszą historię</span>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 intro-image relative">
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
                                alt="Artemida House Exterior"
                                fill
                                className="object-cover rounded-2xl shadow-2xl z-10 masking-image"
                            />

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lemon-primary/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
