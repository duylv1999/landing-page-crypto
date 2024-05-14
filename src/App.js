import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "../src/components/hero/Hero";
import Header from "./components/header/Header";
import NavMobile from "./components/nav/NavMobile";
import Stats from "./components/stats/Stats";
import Why from "./components/stats/Why";
import Trade from "./components/sections/Trade";

import { useEffect, useState } from "react";
import Calculate from "./components/sections/Calculate";
import Features from "./components/sections/Features";
import NewsLetter from "./components/sections/NewsLetter";
import Footer from "./components/sections/Footer";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  //state management
  const [navMobile, setNavMobile] = useState(false);
  //aos init
  useEffect(() => {
    Aos.init({
      duration: 1200,
      delay: 0,
      once: true,
    });
  });

  return (
    <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Header
        setNavMobile={setNavMobile}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={theme === "dark"}
      />
      <Hero />
      {/* Mobile Nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
