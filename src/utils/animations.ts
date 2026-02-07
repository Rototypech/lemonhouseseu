import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element: string | Element, delay = 0, duration = 1) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    );
};

export const staggerChildren = (parent: string | Element, stagger = 0.2) => {
    gsap.fromTo(
        parent, // Use parent selector directly or assume children
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger,
            scrollTrigger: {
                trigger: parent,
                start: "top 80%",
            },
        }
    );
};

export const revealText = (element: string | Element) => {
    // Split text logic would go here if using SplitType/TextPlugin, 
    // but for now simple reveal
    gsap.fromTo(element,
        { y: 100, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1.5, ease: "power4.out", scrollTrigger: {
                trigger: element,
                start: "top 90%"
            }
        }
    )
}
