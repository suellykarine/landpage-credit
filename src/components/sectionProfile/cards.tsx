import {
  Container,
  Img,
  StyledCard,
  TextDescription,
  TextTitle,
} from "./style";
import { SimpleGrid } from "@mantine/core";
import Profiles from "./profiles";
import Image from "next/image";

const Cards = () => {
  return (
    <Container>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: "sm" }]}
        className="cards-container"
      >
        {Profiles.map((profile, index) => {
          return (
            <StyledCard key={index} id={index + "_sc"}>
              <Img
                src={profile.photo}
                alt="Nome do Investidor"
                width="10"
                height="10"
              />
              <div>
                <TextTitle>{profile.type}</TextTitle>
              </div>
              <div>
                <TextDescription>{profile.description}</TextDescription>
              </div>
            </StyledCard>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Cards;
