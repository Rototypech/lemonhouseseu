"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Car, Wifi, PawPrint, Plane } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const amenities = [
    {
        icon: Car,
        title: "Bezpieczny parking",
        desc: "Z myślą o Twoim samochodzie - gratis!",
    },
    {
        icon: Wifi,
        title: "Bezpłatne WiFi",
        desc: "Żebyś był w kontakcie ze światem",
    },
    {
        icon: PawPrint,
        title: "Zwierzęta bez dodatkowych opłat!",
        desc: "Bez problemu możesz wybrać się na wakacje z pupilem",
    },
    {
        icon: Plane,
        title: "Bezpłatny transport z/na lotnisko!",
        desc: "Relaks od pierwszej minuty Twoich wakacji",
    },
];

export default function Offer() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".amenity-item",
                { x: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 75%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-gray-100 overflow-hidden" id="offer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/olivelemons.svg"
                                alt="Olive lemons"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            <div className="absolute bottom-8 left-8 text-white max-w-xs">
                                <h3 className="text-2xl font-bold mb-2">Dlaczego Lemon Houses?</h3>
                                <p className="text-lemon-accent font-bold text-3xl leading-tight">
                                    CO NAS WYRÓŻNIA I DLACZEGO JESTEŚMY NAJLEPSI
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="text-center md:text-left">
                            <span className="text-lemon-accent font-bold tracking-widest uppercase">OFERUJEMY</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-lemon-dark">
                                Oferujemy znacznie więcej niż konkurencja
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Wybierając nas masz pewność, że zadbamy o każdy detal Twojego wypoczynku.
                                Sprawdź dlaczego nasza oferta jest wyjątkowa.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {amenities.map((item, index) => (
                                <div key={index} className="amenity-item flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl shadow-md text-lemon-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lemon-dark">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
