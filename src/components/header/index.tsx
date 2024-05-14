import Link from "next/link";
import { HeaderContainer } from "./style";
import { Header, Container, Group } from "@mantine/core";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";

export function HeaderResponsive() {
  const platformLink = process.env.NEXT_PUBLIC_PLATAFORM_LINK;

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
            <Link
              href={`${process.env.NEXT_PUBLIC_PLATAFORM_LINK}/invitation-letter`}
              id="plataform-access"
            >
              SOLICITAR CARTA CONVITE
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_PLATAFORM_LINK}`}
              id="plataform-access"
            >
              ACESSAR A PLATAFORMA
            </Link>
          </div>
        </Container>
      </Header>
    </HeaderContainer>
  );
}
