import { Container, Grid, Text } from "@mantine/core";
import {
  Column,
  CopyrightText,
  FooterWrapper,
  LogoImage,
  LogoWrapper,
  SocialLinksWrapper,
} from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container size="100%" id="footer">
        <Grid gutter="lg" className="grid">
          <Grid.Col span={4}>
            <LogoWrapper>
              <LogoImage src="/logo1.png" alt="Logo" />
            </LogoWrapper>
            <SocialLinksWrapper>
              <Link href="https://www.instagram.com/" id="instagram">
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com/" id="twitter">
                <img src="/twitter.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://www.facebook.com/" id="facebook">
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.youtube.com/" id="youtube">
                <img src="/youtube.png" alt="Youtube" width={24} height={24} />
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
            <Column>
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
                size="lg"
                weight={500}
                color={`var(--white)`}
                className="column-name"
              >
                Contatos
              </Text>
              <p>+55 (11) 2345-6789</p>
              <p>contato@creditconnect.com</p>
              <p>Alameda Cleveland, 509</p>
              <p>CEP: 01218-000 - São Paulo/SP</p>
            </Column>
          </Grid.Col>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
