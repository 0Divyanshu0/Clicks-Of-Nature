import { useEffect } from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Reels } from "./components/Reels";
import { About } from "./components/About";
import { Collaborate } from "./components/Collaborate";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Journal from "./components/Journal";
import { scrollToSection } from "./navigation";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const activeSection = useActiveSection();

  useEffect(() => {
    document.body.classList.add("dark");
    return () => document.body.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="top-right" />

      <ScrollProgress />

      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <Hero />
      <Portfolio />
      <Journal />
      <Reels />
      <About />
      <Collaborate />
      <Contact />
      <Footer />
    </div>
  );
}
