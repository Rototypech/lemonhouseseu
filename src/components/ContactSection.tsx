"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Facebook } from "lucide-react";
import { useRef } from "react";

export default function ContactSection() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".contact-content",
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
        },
        { scope: container }
    );

    return (
        <section ref={container} className="bg-white">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
                {/* Left: Map */}
                <div className="lg:w-1/2 min-h-[400px] lg:min-h-full relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.495098254884!2d24.00494437651036!3d37.94241697194348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19114757c2893%3A0xe67db5d96206019a!2sArtemida%20190%2016%2C%20Grecja!5e0!3m2!1spl!2spl!4v1707335687784!5m2!1spl!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(20%)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    />
                </div>

                {/* Right: Form & Info */}
                <div className="lg:w-1/2 bg-black text-white p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full contact-content">
                        <h2 className="text-3xl font-bold mb-8">Skontaktuj się z nami</h2>

                        <form className="space-y-6 mb-12">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Imię</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-lemon-primary transition-colors"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Telefon</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-lemon-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">E-mail</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-lemon-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Wiadomość</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-lemon-primary transition-colors resize-none"
                                />
                            </div>

                            <button type="submit" className="bg-lemon-primary hover:bg-green-600 text-white px-8 py-3 rounded font-bold transition-all transform hover:scale-105">
                                Wyślij
                            </button>
                        </form>

                        <div className="space-y-8 contact-content">
                            <h3 className="text-xl font-bold">Gdzie Nas znajdziesz</h3>

                            <div className="space-y-4 text-sm text-gray-400">
                                <div className="flex gap-4">
                                    <span className="w-20">Adres:</span>
                                    <span>Artemida 190 16, Grecja</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="w-20">Telefon:</span>
                                    <span>Polski +48 578 004 258</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="w-20"></span>
                                    <span>Grecki +30 699 614 3032</span>
                                </div>
                            </div>

                            <a href="#" className="inline-block border border-gray-700 p-3 rounded hover:bg-white hover:text-black transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
