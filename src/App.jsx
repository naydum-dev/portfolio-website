import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { portfolioData } from "./data/portfolioData";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar name={portfolioData.name} />

      <main>
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          bio={portfolioData.bio}
        />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
