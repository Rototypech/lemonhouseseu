import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHero from "@/components/SubHero";
import ContactSection from "@/components/ContactSection";

export default function Kontakt() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <SubHero title="KONTAKT" subtitle="Kontakt" />
            <ContactSection />
            <Footer />
        </main>
    );
}
