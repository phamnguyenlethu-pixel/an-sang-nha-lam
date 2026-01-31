import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <MenuGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
