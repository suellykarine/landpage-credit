import { CarouselCards } from "../cardsCarousel";
import Card from "./card";
import { H3, DivTitle, H2, DivMain } from "./style";
const SectionProfileInvestor = () => {
  return (
    <DivMain id="SectionProfile">
      <DivTitle id="section2">
        <H2>Soluções alinhadas aos objetivos do Assessor de investimento</H2>
        <H3>O CreditConnect tem soluções para cada perfil.</H3>
      </DivTitle>
      <CarouselCards />
    </DivMain>
  );
};

export default SectionProfileInvestor;
