import styled from "@emotion/styled";
import { Paper } from "@mantine/core";
import { DivImage } from "../home/style";

export const DivMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  }
`;

export const DivImagePerformance = styled(DivImage)`
  img {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;
export const Button = styled.button`
  width: 287px;
  height: 50px;
  background: #ec8931;
  box-shadow: 3px 0px 150px #ec8931;
  border-radius: 10px;
  border: none;
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
    transition: 0.3s;
    transform: scale(1.03);
  }
  @media (max-width: 746px) {
    display: none;
  }
`;

export const DivCardsAndTitle = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  width: 49%;
  height: 80%;
  @media (max-width: 1200px) {
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 592px) {
    justify-content: space-evenly;
  }
`;
export const SectionTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 569px;
  text-align: center;
  h2 {
    font-weight: 700;
    color: #ecf1f0;
    font-size: 36px;
    margin: 0;
    padding: 0;
  }
  p {
    color: #ecf1f0;
    font-weight: 700;
    font-size: 54px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 575px) {
    p {
      font-size: 34px;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

export const SectionCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  height: 400px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 851px;
  }
  @media (max-width: 592px) {
    width: 100%;
    max-width: 851px;
    height: auto;
  }
`;

export const Card = styled(Paper as any)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(234px, 50%, 274px);
  height: clamp(50px, 50%, 150px);
  column-gap: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;

  .title {
    font-weight: 700;
    font-size: 48px;
    color: #ecf1f0;
    text-align: center;
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: #b6b6b6;
  }
  @media (max-width: 592px) {
    height: 100px;
    .title {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
