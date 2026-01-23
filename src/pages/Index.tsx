import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Team from "@/components/Team";
import Schedule from "@/components/Schedule";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import MobileButton from "@/components/MobileButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Gallery />
      <Achievements />
      <Team />
      <Schedule />
      <Contacts />
      <Footer />
      <MobileButton />
    </main>
  );
};

export default Index;
