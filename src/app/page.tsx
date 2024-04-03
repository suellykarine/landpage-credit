"use client";
import { HeaderResponsive } from "@component/components/header";
import { linksHeader } from "@component/components/header/linksHeader";
import { Main } from "./style";
import InviteButton from "@component/components/inviteButton";
import SectionHome from "@component/components/home";
import InvestmentCoverageSection from "@component/components/investmentCoverageSection";
import SectionProfileInvestor from "@component/components/sectionProfile";
import HowToStartSection from "@component/components/howToStart";

import SectionPerformance from "@component/components/performance";
import { Deposition } from "@component/components/depositions";
import { DepositionsCaroulsel } from "@component/components/depositionsCaroulsel";
import { useEffect, useState } from "react";

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
      <HeaderResponsive links={linksHeader} />
      <Main>
        <SectionHome />
        <SectionProfileInvestor />
        <InvestmentCoverageSection />
        <SectionPerformance />
        <DepositionsCaroulsel />
        <HowToStartSection />
      </Main>
    </>
  );
}
