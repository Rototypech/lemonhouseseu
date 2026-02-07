import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

const Footer = () => {
    return (
        <footer className="bg-lemon-dark text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="font-display font-bold text-3xl tracking-tight">
                                Lemon<span className="text-lemon-accent">Houses</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Odkryj swoje idealne miejsce na wypoczynek. Luksusowe domy i apartamenty w sercu greckiej Artemidy. Poczuj magię wakacji.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-display font-bold text-xl text-lemon-accent">Nawigacja</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-lemon-primary transition-colors hover:pl-2 duration-300 block">Strona Główna</Link></li>
                            <li><Link href="/o-nas" className="hover:text-lemon-primary transition-colors hover:pl-2 duration-300 block">O nas</Link></li>
                            <li><Link href="/domki-i-apartamenty" className="hover:text-lemon-primary transition-colors hover:pl-2 duration-300 block">Domy i Apartamenty</Link></li>
                            <li><Link href="#gallery" className="hover:text-lemon-primary transition-colors hover:pl-2 duration-300 block">Galeria</Link></li>
                            <li><Link href="/kontakt" className="hover:text-lemon-primary transition-colors hover:pl-2 duration-300 block">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="font-display font-bold text-xl text-lemon-accent">Kontakt</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-4 group cursor-pointer">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-lemon-primary transition-colors">
                                    <Phone size={16} className="text-lemon-accent group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-50 uppercase tracking-wider mb-1">Rezerwacje</span>
                                    <span className="font-bold text-white tracking-wide">+48 123 456 789</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group cursor-pointer">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-lemon-primary transition-colors">
                                    <Mail size={16} className="text-lemon-accent group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-50 uppercase tracking-wider mb-1">Email</span>
                                    <span className="font-bold text-white tracking-wide">kontakt@lemonhouses.pl</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group cursor-pointer">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-lemon-primary transition-colors">
                                    <MapPin size={16} className="text-lemon-accent group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-50 uppercase tracking-wider mb-1">Lokalizacja</span>
                                    <span className="font-bold text-white tracking-wide">Artemida 190 16, Grecja</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Socials */}
                    <div className="space-y-6">
                        <h4 className="font-display font-bold text-xl text-lemon-accent">Social Media</h4>
                        <p className="text-gray-400 text-sm">Obserwuj nas, aby być na bieżąco z nowościami i promocjami.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-lemon-primary hover:text-white transition-all hover:scale-110">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-lemon-primary hover:text-white transition-all hover:scale-110">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} LemonHouses. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Polityka Prywatności</Link>
                        <Link href="#" className="hover:text-white transition-colors">Regulamin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
