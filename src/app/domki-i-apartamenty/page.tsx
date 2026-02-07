import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHero from "@/components/SubHero";
import OfferIntro from "@/components/OfferIntro";
import OfferGrid from "@/components/OfferGrid";
import BottomCTA from "@/components/BottomCTA";

export default function Domki() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <SubHero title="Domki i Apartamenty" subtitle="Domki i Apartamenty" />
            <OfferIntro />
            <OfferGrid />
            <BottomCTA />
            <Footer />
        </main>
    );
}
