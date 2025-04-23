import InformatiqueNavbar from "./components/InformatiqueNavbar";
import Competences from "./components/CompetencesSection";
import Projets from "./components/ProjectsSection";
import VeilleTechno from "./components/VeilleTechnoSection";
import CodeIntro from "./components/CodeIntro";
import InformatiqueIntro from "./components/InformatiqueIntro";
import Footer from "../components/Footer";

export default function InformatiquePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <InformatiqueNavbar />

      {/* Intro */}
      <InformatiqueIntro />
      <CodeIntro />

      {/* Sections principales */}
      <main className="flex-1">
        {/* Compétences */}
        <section id="competences" className="py-24">
          <Competences />
        </section>

        {/* Projets */}
        <section id="projets" className="py-24 bg-white">
          <Projets />
        </section>

        {/* Veille Technologique */}
        <section id="veille" className="py-24">
          <VeilleTechno />
        </section>
        <Footer />
      </main>
    </div>
  );
}
