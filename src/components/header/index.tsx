import { HeaderContainer } from "./style";
import { Header, Container } from "@mantine/core";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

export function HeaderResponsive() {
  return (
    <HeaderContainer id="container-header">
      <Header height={90} className={"header"} classNames={"Header"}>
        <Container className={"header-container"} id="header-container">
          <ScrollLink
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src="/Logo.svg" alt="Logotipo" />
          </ScrollLink>

          <div className="containerButtons">
            <button
              id="plataform-access"
              onClick={() => {
                window.location.href = `${process.env
                  .NEXT_PUBLIC_PLATAFORM_LINK!}invitation-letter`;
              }}
            >
              SOLICITAR CARTA CONVITE
            </button>
            <button
              id="plataform-access"
              onClick={() => {
                window.location.href = process.env.NEXT_PUBLIC_PLATAFORM_LINK!;
              }}
            >
              ACESSAR PLATAFORMA
            </button>
          </div>
        </Container>
      </Header>
    </HeaderContainer>
  );
}
