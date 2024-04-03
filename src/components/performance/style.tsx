import styled from "@emotion/styled";
import { Paper } from "@mantine/core";
import { DivImage } from "../home/style";
import { DivMain } from "../home/style";

export const DivImagePerformance = styled(DivImage)`
  img {
    width: 90%;
    height: 90%;
  }
`;

export const Button = styled.button`
  width: 287px;
  height: 50px;
  background: #ec8931;
  box-shadow: 3px 0px 150px #ec8931;
  border-radius: 10px;
  border: 0;
  left: 111px;
  top: 564px;

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

  &:active {
    transform: translateY(4px);
  }
`;

export const DivCardsAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  width: 49%;
  height: 80%;
  margin: 2rem 0 3rem -2rem;
  @media (max-height: 650px) {
  }
`;
export const SectionTitle = styled.section`
  width: 569px;
  height: 142px;
  text-align: center;
  h2 {
    font-weight: 700;
    color: #ecf1f0;
    font-size: 36px;
  }
  p {
    color: #ecf1f0;
    font-weight: 700;
    font-size: 54px;
    margin-top: -3.5rem;
  }
`;

export const SectionCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 100%;
  height: 400px;
`;

export const Card = styled(Paper as any)`
  width: 274px;
  height: 150px;
  margin: 0 2rem 0 0;
  padding: 20px 30px 30px 28px;
  gap: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;

  .title {
    font-weight: 700;
    font-size: 48px;
    color: #ecf1f0;
    margin-top: -1rem;
  }
  p {
    margin-top: -3rem;
    font-weight: 400;
    font-size: 16px;
    color: #b6b6b6;
  }
  :hover {
    transition: 1s;
    transition: 0.3s;
    transform: scale(1.05);
    padding: 30px 30px 30px 28px;
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-height: 650px) {
    width: 244px;
    height: 120px;
    .title {
      font-size: 40px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 1260px) {
    width: 200px;
    .title {
      font-size: 38px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (min-width: 1900px) {
    width: 400px;
  }
  @media (min-width: 2662px) {
    width: 475px;
  }
`;
