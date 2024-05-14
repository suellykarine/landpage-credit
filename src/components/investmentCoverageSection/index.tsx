import { Main } from "@component/app/style";
import React from "react";
import InviteButton from "../inviteButton";
import {
  ImageDiv,
  InvestmentCoverageDiv,
  SectionContainer,
  Span,
} from "./style";
import { useRouter } from "next/navigation";
import Image from "next/image";

const InvestmentCoverageSection = () => {
  const router = useRouter();

  return (
    <SectionContainer id="section3">
      <InvestmentCoverageDiv id="investment-coverage">
        <p>
          A SRM é uma gestora e administradora de fundos de investimentos com 20
          anos de experiência.
        </p>

        <p>
          Construímos um produto ideal e robusto para você, o Credit Conect.
        </p>

        <p>
          Agora você vai poder investir em empresas que estão em nosso portfólio
          e ter a garantia dessas operações que passam por nossa tecnologia e
          nossa IA de análise de crédito.
        </p>

        <InviteButton
          text="SOLICITE SUA CARTA CONVITE"
          onClick={() => {
            const plataformLink = process.env.NEXT_PUBLIC_PLATAFORM_LINK;
            router.push(`${plataformLink}invitation-letter`);
          }}
        />
      </InvestmentCoverageDiv>

      <ImageDiv>
        <Image
          src="/imagemRoadMap.svg"
          alt="roadmap"
          width="20"
          height="20"
          priority={true}
        />
      </ImageDiv>
    </SectionContainer>
  );
};

export default InvestmentCoverageSection;
