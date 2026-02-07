"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const offers = [
    {
        title: "Apartament Cytryna II",
        price: "140.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Domek Melon",
        price: "210.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2574&auto=format&fit=crop",
    },
    {
        title: "Apartament Figa",
        price: "140.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop",
    },
    {
        title: "Domek Oliwka",
        price: "180.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Apartament Figa II",
        price: "140.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Apartament Pomarańcza",
        price: "125.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Apartament Cytryna",
        price: "170.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Domek Mandarynka",
        price: "175.00€",
        unit: "za / noc",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop",
    },
];

export default function OfferGrid() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".offer-card",
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <span className="text-lemon-accent font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                        Nasza Oferta
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-lemon-dark mb-6 leading-tight">
                        Ekskluzywne domy <br />i apartamenty
                    </h2>
                    <div className="w-24 h-1 bg-lemon-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {offers.map((offer, index) => (
                        <div key={index} className="offer-card group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                                {/* Price Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 text-lemon-dark font-bold font-display shadow-lg">
                                    {offer.price} <span className="text-[10px] font-sans font-normal uppercase text-gray-500 tracking-wide">/ noc</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="font-display font-bold text-xl text-lemon-dark mb-2 group-hover:text-lemon-primary transition-colors">
                                    {offer.title}
                                </h3>
                                <Link
                                    href={`/apartament/${index}`}
                                    className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-transparent group-hover:border-lemon-accent group-hover:text-lemon-accent transition-all pb-1"
                                >
                                    Zobacz szczegóły
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
