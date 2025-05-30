"use client";
import { HeaderResponsive } from "@component/components/header";
import { ContainerLandingPage, Main } from "./style";
import SectionHome from "@component/components/home";
import InvestmentCoverageSection from "@component/components/investmentCoverageSection";
import SectionProfileInvestor from "@component/components/sectionProfile";
import HowToStartSection from "@component/components/howToStart";

import SectionPerformance from "@component/components/performance";
import { useEffect, useState } from "react";
import Footer from "@component/components/footer";

const handleClick = () => {
  console.log("O botão foi clicado!");
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      const scrollTo = window.innerHeight / 6;
    }
    document.addEventListener("scroll", () => handleScroll());
    document.removeEventListener("scroll", () => handleScroll());
  }, [scrollY]);

  return (
    <>
      <HeaderResponsive />

      <Main>
        <ContainerLandingPage>
          <SectionHome />
          <SectionProfileInvestor />
          <InvestmentCoverageSection />
          <SectionPerformance />
          {/* <DepositionsCaroulsel /> */}
          <HowToStartSection />
        </ContainerLandingPage>
        <Footer />
      </Main>
    </>
  );
}
