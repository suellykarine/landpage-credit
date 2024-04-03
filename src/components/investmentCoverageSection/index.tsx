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
        <Span>OTIMIZAÇÃO DE CAMPANHA</Span>
        <h2>COBERTURA DE INVESTIMENTOS INTERNACIONAIS.</h2>

        <p>
          Esqueça os pixels dependentes de cookies. Use servidor para servidor
          confiável postbacks para obter dados de conversão, distinguir entre
          vários tipos de conversão e até mesmo passá-los para sua fonte de
          tráfego!
        </p>

        <p>
          Esqueça os pixels dependentes de cookies. Use servidor para servidor
          confiável postbacks para obter dados de conversão, distinguir entre
          vários tipos de conversão e até mesmo passá-los para sua fonte de
          tráfego!
        </p>

        <InviteButton
          text="SOLICITE SUA CARTA CONVITE"
          onClick={() => {
            router.push("/invitation-letter");
          }}
        />
      </InvestmentCoverageDiv>

      <ImageDiv>
        <Image
          src="/manAtWork.svg"
          alt="Man working"
          width="10"
          height="10"
          priority={true}
        />
      </ImageDiv>
    </SectionContainer>
  );
};

export default InvestmentCoverageSection;
