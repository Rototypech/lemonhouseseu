"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const images = [
    "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595855709940-fa24263c3325?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop",
];

export default function AboutContent() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".about-text",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(".about-image",
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".image-grid",
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Text Section */}
                <div className="max-w-4xl mx-auto text-center mb-24 about-text">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-lemon-dark mb-8">
                        Kim jesteśmy?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-12">
                        Jesteśmy młodymi, pełnymi pasji i kreatywnymi ludźmi, którzy pokochali Grecję i chcą się nią z Państwem podzielić 🍋
                        Ten wspaniały, bałkański kraj towarzyszył nam od najmłodszych lat. Niebiańskie plaże, duuużo słońca i chęć połączenia się z Grecją na stałe, spowodował, że zaczęła w nas kiełkować myśl o związaniu się z Elladą na zawsze.
                        Rozpoczęliśmy poszukiwania idealnego miejsca i wyjątkowych lokalizacji i tak w 2016 roku trafiliśmy na... Mandarynkę.
                        Ona była pierwszym naszym magicznym miejscem, od którego zaczęła się przygoda z Greckimi Owocami.
                        Jesteśmy otwarci na Państwa potrzeby i sugestie...Chcemy z Wami tworzyć wspaniały, grecki odpoczynek, na wyciągnięcie ręki 🍋
                    </p>

                    <p className="font-bold text-sm tracking-widest uppercase text-lemon-dark">
                        NASZE DOMKI ZNAJDUJĄ SIĘ W MIEJSCOWOŚCI ARTEMIDA, GRECJA
                    </p>
                </div>

                {/* Image Grid */}
                <div className="image-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="about-image relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg group">
                            <Image
                                src={src}
                                alt={`About image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
