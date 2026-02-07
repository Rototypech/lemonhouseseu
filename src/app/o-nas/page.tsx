import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHero from "@/components/SubHero";
import AboutContent from "@/components/AboutContent";

export default function ONas() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <SubHero title="O NAS" subtitle="O nas" />
            <AboutContent />
            <Footer />
        </main>
    );
}
