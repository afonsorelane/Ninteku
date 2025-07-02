import {Header} from "../components/header";
import { AreasAtuacao } from "../components/dom/AreasAtuacao";
import {Footer} from "../components/footer";
import { HeroSection } from "../components/dom/HeroSection";
import { MissionVision } from "../components/dom/MissionVision";
import { Testimonials } from "../components/dom/Testimonials";
import { CallToAction } from "../components/dom/CallToAction";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-10">
        <HeroSection />
        <MissionVision />
        <AreasAtuacao />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}