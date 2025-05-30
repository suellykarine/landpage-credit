import Image from "next/image";
import {
  Card,
  DivCardsAndTitle,
  SectionCard,
  SectionTitle,
  DivImagePerformance,
  Button,
  DivMain,
} from "./style";
import { dataCards } from "./dataCards";
import { useRouter } from "next/navigation";

const SectionPerformance = () => {
  const router = useRouter();
  function onClick() {
    window.location.href = "https://www.srmasset.com/";
  }
  return (
    <DivMain id="section4">
      <DivImagePerformance>
        <Image
          src="/imagemPerformance.svg"
          alt="Imagem performance"
          width="100"
          height="100"
          priority={true}
        />
      </DivImagePerformance>
      <DivCardsAndTitle>
        <SectionTitle>
          <h2>Nosso crescimento é</h2>
          <p>exponencial</p>
        </SectionTitle>
        <SectionCard>
          {dataCards.map((data, index) => {
            return (
              <Card key={index}>
                <p className="title">{data.title}</p>
                <p>{data.description}</p>
              </Card>
            );
          })}
        </SectionCard>
        <Button
          onClick={() => {
            window.location.href = `${process.env
              .NEXT_PUBLIC_PLATAFORM_LINK!}invitation-letter`;
          }}
          id="buttonPerformance"
        >
          <span>SOLICITE SUA CARTA CONVITE</span>
        </Button>
      </DivCardsAndTitle>
    </DivMain>
  );
};

export default SectionPerformance;
