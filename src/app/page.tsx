import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Steps />
      <Offer />
      <Testimonials />
      <Footer />
    </main>
  );
}
