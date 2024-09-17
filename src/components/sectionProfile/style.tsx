import {
  Text,
  Card,
  CardProps,
  createPolymorphicComponent,
  TextProps,
} from "@mantine/core";
import styled from "@emotion/styled";

export const DivMain = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  overflow-x: hidden;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H2 = styled.h2`
  width: clamp(0px, 100%, 778.01px);
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  text-align: center;

  color: var(--white);

  @media (min-width: 2560px) {
    font-size: 55px;
    width: 1000px;
  }
  @media (max-width: 767px) {
    font-size: 2rem;
  }
  @media (max-width: 479px) {
    font-size: 1.8rem;
  }
`;

export const H3 = styled.h3`
  width: clamp(0px, 100%, 842px);
  height: 37px;
  margin-top: -18px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  text-align: center;

  color: var(--white);

  @media (min-width: 2560px) {
    font-size: 33px;
    margin-top: 11px;
    width: 900px;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  @media (max-width: 575px) {
    font-size: 0.8rem;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  filter: drop-shadow(2px 6px 10px rgba(0, 0, 0, 0.2));

  margin-left: 5px;
  margin-top: 33px;

  @media (min-width: 2560px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 1060px) {
    margin-left: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  .cards-container {
    @media (min-width: 1600px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }
  }
`;

export const StyledCard = createPolymorphicComponent<"div", CardProps>(styled(
  Card as any
)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  width: 275px;
  height: 325px;
  box-sizing: border-box;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-weight: 400;
  margin-right: 18px;
  margin-top: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .typeInvestor {
    margin-bottom: 80px;
  }

  &:hover {
    transition: 0.7s;
    transform: scale(1.04);
    background-color: var(--secondary-color);
  }
`);

export const TextTitle = createPolymorphicComponent<"h2", TextProps>(styled(
  Text as any
)`
  max-width: 190px;
  height: 55px;

  margin-left: 15px;
  margin-top: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;

  text-align: center;

  color: var(--white);

  @media (min-width: 1600px) {
    font-size: 26px;
  }
  @media (min-width: 2560px) {
    font-size: 26px;
  }
`);
