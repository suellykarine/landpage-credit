import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./../../styled.registry";
import RootStyleRegistry from "./../../emotion.registry";
import { GlobalStyle } from "./globals";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <meta name="language" content="pt" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>CreditConnect | Investimento em ativos de crédito</title>
        <meta
          name="description"
          content="Uma plataforma de investimento em ativos de crédito, que viabiliza o investimento por diversos meios de pagamento, idealizada pela SRM. Conheça mais!"
        />
        <meta
          name="classification"
          content="Investimento, Ativos de Crédito, Mercado Secundário"
        />
        <meta
          name="keywords"
          content="investimento, investimento alternativo, comercial, ativos judiciais, ativos de crédito,
lucro, rentabilidade, segurança, renda, investir, invista, empreendimentos, cvm, oportunidade,
 originação, estruturação, distribuição, deal,dredit connect, FIDC, SRM, investidor institucional, Family Office
WeFin, capital,"
        />
        <meta name="robot" content="all" />

        <meta
          property="og:title"
          content="CreditConnect | Investimento em ativos de crédito<"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Uma plataforma de investimento em ativos de crédito, que viabiliza o investimento por diversos meios de pagamento, idealizada pela SRM. Conheça mais!"
        />
        <meta property="og:image" content="Logo.svg" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://creditconnect.com.br/" />
        <meta name="identifier-url" content="/" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.svg" />

        <link rel="canonical" href="https://creditconnect.com.br/" />
      </head>
      <body>
        <RootStyleRegistry>
          <GlobalStyle />
          <StyledComponentsRegistry>{children} </StyledComponentsRegistry>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
