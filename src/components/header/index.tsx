import Link from "next/link";
import { HeaderContainer } from "./style";
import { Header, Container, Group } from "@mantine/core";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };
  const items = links.map((link) => (
    <ScrollLink
      key={link.label}
      to={link.link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="selected"
      onClick={() => handleLinkClick(link.label)}
    >
      {link.label}
    </ScrollLink>
  ));

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

          <Group spacing={5} className={"navigation"}>
            {items}
          </Group>
          <Link href={"http://www.localhost:3000/"} id="plataform-access">
            ACESSAR A PLATAFORMA
          </Link>
        </Container>
      </Header>
    </HeaderContainer>
  );
}
