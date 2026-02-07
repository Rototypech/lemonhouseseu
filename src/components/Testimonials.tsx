"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Star } from "lucide-react";
import { useRef } from "react";

const reviews = [
    {
        name: "Magdalena Zet",
        text: "Domki super wyposażone, jest wszystko co potrzeba. Klimatyzacja, ogromny taras, grill w którym można usmażyć świeżą rybę, pachnąca cytryna w ogrodzie i czyste szkło, stylowe, bardzo ładnie urządzone (...)",
    },
    {
        name: "Piotr Jan",
        text: "Mega zadowoleni. Jesteśmy z tego miejsca 7. I każdy wypoczynek w zielonym pałacu... W cenie jest samochód do dyspozycji, któr aktywnie wykorzystywaliśmy na wycieczki. Bardzo polecam!",
    },
    {
        name: "Karolina Hobsua",
        text: "Bardzo polecam Lemon Houses im. Zmysł i Miejscówka, domki excull !?!",
    },
];

export default function Testimonials() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".review-card",
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    y: 0,
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
        <section ref={container} className="py-24 bg-white" id="reviews">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="w-12 h-1 bg-lemon-accent inline-block mb-4" />
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-lemon-dark">
                        RECENZJE <span className="text-lemon-accent">KLIENTÓW</span>
                    </h2>
                    <span className="w-12 h-1 bg-lemon-accent inline-block mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group">
                            <div className="absolute -top-4 left-8 text-6xl text-lemon-primary/20 font-serif">"</div>

                            <div className="flex gap-1 mb-4 text-lemon-accent">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 italic leading-relaxed relative z-10">
                                {review.text}
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-200">
                                <h4 className="font-bold text-lemon-dark">{review.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
