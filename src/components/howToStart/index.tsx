import Footer from "../footer";
import InviteButton from "../inviteButton";
import {
  CardsOrTextContainer,
  Div,
  HowToStartContainer,
  MainSectionContent,
} from "./style";
import { useRouter } from "next/navigation";
import { Paper, Text } from "@mantine/core";
import Image from "next/image";
import { dataCards, dataTexts } from "./data";
import { IDataCardsHowStart, IDataTextsHowStart } from "./interface";

const HowToStartSection = () => {
  const router = useRouter();

  return (
    <HowToStartContainer id="section6">
      <MainSectionContent id="how-to-start">
        <Div>
          <h2>Como começar</h2>
          <p>Maneira simples e fácil de começar seu investimento</p>
        </Div>
        <CardsOrTextContainer card={true}>
          {dataCards.map((data: IDataCardsHowStart, index: number) => {
            if (data.isArrow) {
              return (
                <img
                  src={data.src}
                  alt={data.alt}
                  className={data.isArrowUp ? "arrow arrowUp" : "arrow"}
                  key={index}
                />
              );
            } else {
              return (
                <Paper shadow="xs" className="card" key={index}>
                  <Image
                    src={data.src}
                    alt={data.alt}
                    width={data.width}
                    height={data.height}
                  />
                </Paper>
              );
            }
          })}
        </CardsOrTextContainer>
        <CardsOrTextContainer>
          {dataTexts.map((data: IDataTextsHowStart, index: number) => {
            return (
              <div className="text" key={index}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            );
          })}
        </CardsOrTextContainer>
        <div className="inviteButton">
          <InviteButton
            text="SOLICITE SUA CARTA CONVITE"
            onClick={() => {
              window.location.href = `${process.env
                .NEXT_PUBLIC_PLATAFORM_LINK!}invitation-letter`;
            }}
          />{" "}
        </div>
      </MainSectionContent>
    </HowToStartContainer>
  );
};

export default HowToStartSection;
