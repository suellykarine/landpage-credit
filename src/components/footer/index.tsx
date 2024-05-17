import { Container, Grid, Text } from "@mantine/core";
import {
  Column,
  ContainerFooter,
  CopyrightText,
  FooterWrapper,
  LogoImage,
  LogoWrapper,
  SocialLinksWrapper,
} from "./style";
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container size="100%" id="footer">
        <ContainerFooter>
          <Grid gutter="md" className="grid">
            <Grid.Col span={4}>
              <LogoWrapper>
                <LogoImage src="/logo1.png" alt="Logo" />
              </LogoWrapper>
              <SocialLinksWrapper>
                <Link href="www.instagram.com/srmasset/" id="instagram">
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://www.facebook.com/SRMASSET" id="facebook">
                  <img
                    src="/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </Link>
              </SocialLinksWrapper>
              <CopyrightText>
                2023 CreditConnect. Todos os direitos reservados.
              </CopyrightText>
            </Grid.Col>
            <Grid.Col span={2}>
              <Column>
                <Text size="lg" weight={500} color={`var(--white)`}>
                  Sobre Nós
                </Text>
                <Link
                  href="https://www.srmasset.com/a-srm-4/"
                  target="_blank"
                  id="about"
                >
                  Sobre
                </Link>
                <Link
                  href="https://www.srmasset.com/a-srm-4/"
                  target="_blank"
                  id="blog"
                >
                  Blog
                </Link>
                <Link
                  target="_blank"
                  href="https://www.srmasset.com/wp-content/uploads/2021/08/SRM-Pol%C3%ADtica-de-Privacidade-e-Tratamento-de-Dados-Pessoais-01.07.2021.pdf"
                  id="privacy"
                >
                  Privacidade
                </Link>
              </Column>
            </Grid.Col>
            <Grid.Col span={2}>
              <Column className="column-services">
                <Text size="lg" weight={500} color={`var(--white)`}>
                  Serviços
                </Text>
                <a
                  target="_blank"
                  href="https://www.srmasset.com/nossos-fundos/"
                  id="institucional-services"
                >
                  Serviços institucionais
                </a>
              </Column>
            </Grid.Col>
            <Grid.Col span={2}>
              <Column>
                <Text
                  size="md"
                  weight={500}
                  color={`var(--white)`}
                  className="column-name"
                >
                  Contatos
                </Text>
                <p>+55 11 9.9153-6872</p>
                <p>srm@srmasset.com</p>
                <p>Alameda Cleveland, 509</p>
                <p>CEP: 01218-000 - São Paulo/SP</p>
              </Column>
            </Grid.Col>
          </Grid>
        </ContainerFooter>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
