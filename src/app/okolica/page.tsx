import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHero from "@/components/SubHero";
import AreaIntro from "@/components/AreaIntro";
import AreaTabs from "@/components/AreaTabs";

export default function Okolica() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <SubHero title="OKOLICA" subtitle="Okolica" />
            <AreaIntro />
            <AreaTabs />
            <Footer />
        </main>
    );
}
