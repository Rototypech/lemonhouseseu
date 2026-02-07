import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHero from "@/components/SubHero";
import GalleryGrid from "@/components/GalleryGrid";

export default function Galeria() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <SubHero title="GALERIA" subtitle="Galeria" />
            <GalleryGrid />
            <Footer />
        </main>
    );
}
