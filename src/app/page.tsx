'use client'

import Work from "@/components/sections/Work";
import Hero from "../components/sections/Hero";
import Nav from "../components/sections/Nav";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
// import Chat from "@/components/Chat";
import { useVlogStore } from "@/lib/store/storeData";

export default function Home() {

  const { fetchVlogData, isLoading, vlogData } = useVlogStore();

  // const fetchSkills = usePortfolioStore((state) => state.fetchSkills);
  // const fetchProjects = usePortfolioStore((state) => state.fetchProjects);
  // const fetchExperiences = usePortfolioStore((state) => state.fetchExperiences);

  useEffect(() => {fetchVlogData()}, [fetchVlogData]);

  return isLoading ? <></> : vlogData && (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Nav />

      <Hero vlog={vlogData} />
      <Work vlog={vlogData} />

      <AboutMe vlog={vlogData} />
      <Contact vlog={vlogData} />

      <Footer />

      {/* <Chat /> */}
    </div >
  );
}
