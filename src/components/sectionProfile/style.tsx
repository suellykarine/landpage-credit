import {
  Text,
  Card,
  CardProps,
  createPolymorphicComponent,
  TextProps,
} from "@mantine/core";
import styled from "@emotion/styled";
import Image from "next/image";

export const DivMain = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
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

  color: #ffffff;

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

  color: #ffffff;

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
  width: 114.2px;
  height: 112px;
  filter: drop-shadow(2px 6px 10px rgba(0, 0, 0, 0.2));

  margin-left: 5px;
  margin-top: 33px;

  @media (min-width: 2560px) {
    margin-left: 40px;
    width: 166.2px;
    height: 192px;
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
      width: 100%;
    }
  }
`;

export const StyledCard = createPolymorphicComponent<"div", CardProps>(styled(
  Card as any
)`
  background-color: #1c1f4e;
  border: 1px solid #ec8931;
  border-radius: 10px;
  width: 269px;
  height: 410px;
  box-sizing: border-box;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-weight: 400;

  &:hover {
    transition: 0.7s;
    transform: scale(1.04);
    background-color: #ec8931;
    div {
      color: #1c1f4e;
    }
  }

  @media (max-width: 1200px) {
    width: 224px;
    height: 398px;
    div {
      max-width: 180px;
    }
  }

  @media (min-width: 1600px) {
    width: 324px;
    height: 458px;
  }

  @media (min-width: 2560px) {
    width: 450px;
    height: 634px;
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

  color: #ffffff;

  &:hover {
    color: #1c1f4e;
  }

  @media (max-width: 1060px) {
    font-size: 16px;
    margin-left: 10px;
  }
  @media (min-width: 1600px) {
    font-size: 30px;
  }
  @media (min-width: 2560px) {
    margin-left: 50px;
    font-size: 35px;
  }
`);

export const TextDescription = createPolymorphicComponent<
  "p",
  TextProps
>(styled(Text as any)`
  width: 215px;
  height: 119px;

  margin-top: 23px;
  margin-left: 15px;

  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.7);

  opacity: 0.5;

  @media (max-width: 1060px) {
    font-size: 11px;
    margin-top: 6px;
    margin-left: 10px;
  }

  @media (min-width: 1600px) {
    font-size: 15px;
  }

  @media (min-width: 2560px) {
    margin-left: 53px;
    font-size: 24px;
    margin-top: 34px;
  }
`);
