import Footer from "../footer";
import InviteButton from "../inviteButton";
import {
  CardsContainer,
  Div,
  HowToStartContainer,
  MainSectionContent,
} from "./style";
import { useRouter } from "next/navigation";
import { Paper, Text } from "@mantine/core";

const HowToStartSection = () => {
  const router = useRouter();

  return (
    <HowToStartContainer id="section6">
      <MainSectionContent id="how-to-start">
        <Div>
          <h2>Como começar</h2>
          <p>Maneira simples e fácil de começar seu investimento</p>
          <InviteButton
            text="SOLICITE SUA CARTA CONVITE"
            onClick={() => {
              const plataformLink = process.env.NEXT_PUBLIC_PLATAFORM_LINK;
              router.push(`${plataformLink}invitation-letter`);
            }}
          />{" "}
        </Div>
        <CardsContainer>
          <Paper shadow="xs" className="card">
            <h3>Solicite sua Carta Convite</h3>
            <Text>
              Sua conta e identidade pessoal são garantidamente seguras.
            </Text>
          </Paper>
          <Paper shadow="xs" className="card">
            <h3>Preencha o Cadastro</h3>
            <Text>
              Após o cadastro, você recebe um e-mail no time CreditConnect para
              autenticação.
            </Text>
          </Paper>
          <Paper shadow="xs" className="card">
            <h3>Iniciar Portfólio de Investimentos</h3>
            <Text>
              Após Login você tem acesso as funcionalidades da plataforma
              CreditConnect no acesso Premium.
            </Text>
          </Paper>
        </CardsContainer>
      </MainSectionContent>
    </HowToStartContainer>
  );
};

export default HowToStartSection;
