import { useState, useEffect } from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Collaborate } from "./components/Collaborate";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Journal from "./components/Journal";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark] = useState(true); // 🔒 Locked to dark

  // Force dark mode globally
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "portfolio",
        "journal",
        "about",
        "collaborate",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="top-right" />

      <ScrollProgress />

      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
      />

      <Hero isDark={isDark} />
      <Portfolio isDark={isDark} />
      <Journal isDark={isDark} />
      <About isDark={isDark} />
      <Collaborate isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
