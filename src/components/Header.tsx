"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Citrus, Menu, X, Phone, User } from "lucide-react";
import { cn } from "@/utils/cn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "O nas", href: "/o-nas" },
        { name: "Domy i Apartamenty", href: "/domki-i-apartamenty" },
        { name: "Galeria", href: "#gallery" },
        { name: "Okolica", href: "/okolica" },
        { name: "Kontakt", href: "/kontakt" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-lemon-dark/95 backdrop-blur-md py-4 text-white shadow-xl"
                    : "bg-gradient-to-b from-black/50 to-transparent py-8 text-white"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Citrus size={32} className="text-lemon-accent" strokeWidth={1.5} />
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-2xl tracking-wide uppercase leading-none">
                            Lemon<span className="text-lemon-accent">Houses</span>
                        </span>
                        <span className="text-[10px] tracking-[0.3em] uppercase opacity-80 font-light">
                            Greece
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest hover:text-lemon-accent transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-lemon-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-8">
                    <div className="hidden xl:flex items-center gap-4 text-xs">
                        <Phone size={16} className="text-lemon-accent" />
                        <div className="flex flex-col items-start">
                            <span className="opacity-60 font-light uppercase tracking-wide">Rezerwacje</span>
                            <span className="font-bold tracking-wider">+48 123 456 789</span>
                        </div>
                    </div>

                    <Link
                        href="#book"
                        className="hidden md:inline-flex items-center justify-center bg-lemon-accent text-lemon-dark px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg hover:shadow-lemon-accent/20"
                    >
                        Rezerwuj
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 hover:text-lemon-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-lemon-dark z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 lg:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="font-display text-4xl text-white hover:text-lemon-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="#book"
                    className="bg-lemon-accent text-lemon-dark px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-widest mt-8"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Rezerwuj pobyt
                </Link>
            </div>
        </header>
    );
}
