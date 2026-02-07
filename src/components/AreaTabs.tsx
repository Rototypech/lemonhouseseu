"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { MapPin, Camera } from "lucide-react";

const tabs = [
    { id: "ateny", label: "ATENY" },
    { id: "sounion", label: "SOUNION" },
    { id: "korynt", label: "KORYNT" },
    { id: "zoo", label: "ZOO ATTICA" },
    { id: "park", label: "PARK ROZRYWKI" },
    { id: "plaze", label: "PLAŻE" },
];

const content = {
    ateny: {
        title: "Ateny",
        desc: "W odległości 30 km od Artemidy, znajduje się stolica Grecji. Bardzo łatwy dojazd powoduje, że w każdym momencie można zanurzyć się w historii. Zaprzyjaźnić się z Zeusem, Ateną, Aresem...Namacalnie poczuć, ile historii jest w tym mieście. Bo ona wylewa się z każdej uliczki, krzewu, knajpki...",
        subTitle: "Akropol",
        subDesc: "Święte miejsce bogów i taki właśnie naszym zdaniem ma klimat. Dla jednych to tylko „kupa” kamieni dla nas... nieśmiertelne sanktuarium historii. Niesamowite widoki, kamień, na którym odcisnęła swój ząb historia, przenoszą w zaczarowany świat Ateny, Dionizosa, Heroda czy wreszcie Zeusa. Dopiero tutaj można na własne oczy zobaczyć i przekonać się jak stary jest świat. Zapraszamy serdecznie do Cytrynowych Domów na odpoczynek, a ta wspaniała budowla jest w zasięgu 30 km ??",
        mustSee: "Góra Lycabettus ( / ˌ l aɪ k ə ˈ b ɛ t ə s / ), znana również jako Lycabettos , Lykabettus lub Lykavittos ( grecki : Λυκαβηττός , wymawiano [likaviˈtos] ), jest kredowym wzgórzem wapiennym w Atenach , w Grecji na 300 metrach ( 908 stóp) nad poziomem morza. Sosna pokrywa jego podstawę, a na jej dwóch szczytach znajduje się XIX-wieczna kaplica św. Jerzego , teatr i restauracja.",
        mustVisit: "Monastiraki ( grecki : Μοναστηράκι, wymawiane [monastiˈraci] , dosłownie „mały klasztor” ) to dzielnica pchlego targu na starym mieście w Atenach , w Grecji , i jest jedną z głównych dzielnic handlowych w Atenach. Obszar ten jest domem dla butików odzieżowych, sklepów z pamiątkami i sklepów specjalistycznych, i jest główną atrakcją turystyczną Aten i Attyki dla okazyjnych zakupów. Obszar ten nosi nazwę Placu Monastiraki, który z kolei nosi nazwę Kościoła Pantanassa, który znajduje się na placu. Główne ulice tego obszaru to ulica Pandrossou i ulica Adrianou . Znajdująca się na placu stacja metra Monastiraki serwuje zarówno linię 1, jak i linię 3 metra w Atenach .",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2670&auto=format&fit=crop"
    },
    // Placeholder content for other tabs to prevent errors
    sounion: { title: "Sounion", desc: "Opis dla Sounion...", subTitle: "Świątynia Posejdona", subDesc: "Opis...", mustSee: "Opis...", mustVisit: "Opis...", image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop" },
    korynt: { title: "Korynt", desc: "Opis dla Koryntu...", subTitle: "Kanał Koryncki", subDesc: "Opis...", mustSee: "Opis...", mustVisit: "Opis...", image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop" },
    zoo: { title: "Zoo Attica", desc: "Opis dla Zoo...", subTitle: "Zwierzęta", subDesc: "Opis...", mustSee: "Opis...", mustVisit: "Opis...", image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop" },
    park: { title: "Park Rozrywki", desc: "Opis dla Parku...", subTitle: "Atrakcje", subDesc: "Opis...", mustSee: "Opis...", mustVisit: "Opis...", image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop" },
    plaze: { title: "Plaże", desc: "Opis dla Plaży...", subTitle: "Morze", subDesc: "Opis...", mustSee: "Opis...", mustVisit: "Opis...", image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2574&auto=format&fit=crop" },
};

export default function AreaTabs() {
    const [activeTab, setActiveTab] = useState("ateny");
    const container = useRef(null);
    const contentRef = useRef(null);

    const activeContent = content[activeTab as keyof typeof content];

    // Animate content change
    useEffect(() => {
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [activeTab]);

    return (
        <section ref={container} className="pb-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 font-bold text-sm md:text-base uppercase transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-lemon-primary text-white"
                                    : "bg-white text-gray-500 hover:text-lemon-primary"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div ref={contentRef} className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Image Column */}
                        <div className="lg:w-1/3">
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={activeContent.image}
                                    alt={activeContent.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="bg-white/90 px-6 py-3 text-xl font-display font-bold uppercase tracking-widest text-center">
                                        {activeContent.image === "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2670&auto=format&fit=crop" ?
                                            "JAK KWIATY ZDOBIĄ ZIEMIĘ..." : activeContent.title
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="lg:w-2/3 space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-lemon-dark">{activeContent.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{activeContent.desc}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-lemon-dark">{activeContent.subTitle}</h3>
                                <p className="text-gray-600 leading-relaxed">{activeContent.subDesc}</p>
                            </div>

                            {/* Icons & Sections */}
                            <div className="space-y-8">
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-lemon-primary">
                                    <div className="flex items-center gap-3 mb-3 text-lemon-primary">
                                        <Camera size={32} />
                                        <h4 className="font-bold text-lg text-black">Trzeba zobaczyć</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{activeContent.mustSee}</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-lemon-primary">
                                    <div className="flex items-center gap-3 mb-3 text-lemon-primary">
                                        <MapPin size={32} />
                                        <h4 className="font-bold text-lg text-black">Obowiązkowe zwiedzanie</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{activeContent.mustVisit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
