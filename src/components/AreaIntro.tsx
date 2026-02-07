"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AreaIntro() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".anim-text", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="anim-text text-3xl md:text-5xl font-display font-bold text-lemon-dark leading-tight">
                        Poznaj okolicę. Poznaj Artemidę <br />
                        i atrakcje w pobliżu jakie możesz znaleźć
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-sm md:text-base">
                    <div className="anim-text space-y-4">
                        <p>
                            <strong className="text-lemon-dark">Artemida</strong> (gr. Ἄρτεμις) – miasto w <strong className="text-lemon-primary">Grecji</strong>, w administracji
                            zdecentralizowanej <strong className="text-lemon-primary">Attyka</strong>, w regionie <strong className="text-lemon-primary">Attyka</strong>, w jednostce regionalnej
                            <strong className="text-lemon-primary">Attyka Wschodnia</strong>, w gminie <strong className="text-lemon-primary">Spata-Artemida</strong>. W 2011 roku liczyło 21 488
                            mieszkańców.
                        </p>
                    </div>
                    <div className="anim-text space-y-4">
                        <p>
                            <strong className="text-lemon-dark">Artemida</strong> (także <strong>Artemis</strong>; stgr. Ἄρτεμις Ártemis, łac. Diana) – w <strong className="text-lemon-primary">mitologii
                                greckiej</strong> bogini łowów, zwierząt, lasów, gór i roślinności; wielka łowczyni.
                            Uważana również za boginię płodności, niosącą pomoc rodzącym
                            kobietom. Podobnie jak <strong className="text-lemon-primary">Apollo</strong> był bogiem <strong className="text-lemon-primary">słońca</strong> i życia, tak Artemidę
                            uznawano za boginię <strong className="text-lemon-primary">księżyca</strong> i śmierci. Wierzono bowiem, że bliźniacze
                            rodzeństwo charakteryzuje podobna konstrukcja duchowa. Ze względu
                            na związek między obrotami księżyca a <strong className="text-lemon-primary">przypływami</strong> i <strong className="text-lemon-primary">odpływami morza</strong>
                            Artemidę zaczęto uważać za bóstwo opiekuńcze rybaków.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
