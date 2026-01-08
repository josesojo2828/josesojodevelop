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
import Services from "@/components/sections/Service";

export default function Home() {

  const { fetchVlogData, isLoading, vlogData } = useVlogStore();

  // const fetchSkills = usePortfolioStore((state) => state.fetchSkills);
  // const fetchProjects = usePortfolioStore((state) => state.fetchProjects);
  // const fetchExperiences = usePortfolioStore((state) => state.fetchExperiences);

  useEffect(() => {fetchVlogData()}, [fetchVlogData]);

  return isLoading ? <></> : vlogData && (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Nav />

      <div className="mt-16 lg:mt-4"></div>

      <Hero data={vlogData} />
      <Work vlog={vlogData} />

      <Services />

      <AboutMe vlog={vlogData} />
      <Contact data={vlogData} />

      <Footer />

      {/* <Chat /> */}
    </div >
  );
}
