"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const categories = ["Wszystkie", "Pokoje", "Okolica", "Kuchnia", "Łazienka"];

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop", category: "Okolica" },
    { src: "https://images.unsplash.com/photo-1595855709940-fa24263c3325?q=80&w=2670&auto=format&fit=crop", category: "Pokoje" },
    { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop", category: "Pokoje" },
    { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop", category: "Okolica" },
    { src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop", category: "Kuchnia" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop", category: "Łazienka" },
    { src: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2670&auto=format&fit=crop", category: "Pokoje" },
    { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2670&auto=format&fit=crop", category: "Pokoje" },
    { src: "https://images.unsplash.com/photo-1484154218962-a1c002085dc9?q=80&w=2671&auto=format&fit=crop", category: "Kuchnia" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop", category: "Okolica" },
    { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop", category: "Okolica" },
    { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop", category: "Pokoje" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("Wszystkie");
    const container = useRef(null);
    const gridRef = useRef(null);

    const filteredImages = activeCategory === "Wszystkie"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    useGSAP(
        () => {
            gsap.fromTo(".gallery-item",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%"
                    }
                }
            );
        },
        { scope: container, dependencies: [activeCategory] }
    );

    return (
        <section ref={container} className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-lemon-primary text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {filteredImages.map((img, index) => (
                        <div key={index} className="gallery-item break-inside-avoid relative rounded-lg overflow-hidden group mb-4">
                            <Image
                                src={img.src}
                                alt={`Gallery image ${index + 1}`}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                    {img.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
