import styled from "styled-components";
import { ICustomDiv } from "./interface";

export const HowToStartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  color: var(--white);
  button {
    position: static;
  }
`;

export const MainSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-direction: column;
  h2 {
    font-size: 32px;
    margin-top: 22px;
  }
  .arrowUp {
    margin-bottom: 3rem;
  }
  .inviteButton {
    width: 100%;
    padding-left: 40%;
    margin-bottom: 15%;
  }
  @media (max-width: 746px) {
    flex-direction: column;
    justify-content: space-around;
  }
  @media (max-width: 920px) {
    .inviteButton {
      margin-top: 10%;
      padding-left: 30%;
    }
  }
  @media (max-width: 425px) {
    .inviteButton {
      margin-top: 10%;
      padding-left: 15%;
    }
  }
`;

export const CardsOrTextContainer = styled.div<ICustomDiv>`
  width: ${(props) => (props.card ? "60%" : "75%")};
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-around;
  margin: ${(props) => (props.card ? "0 0 0 20%" : "0 0 10% 12%")};
  .card {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 18px;

    color: var(--grey);
  }
  .text {
    width: 300px;
    height: 100px;
    text-align: center;
    line-height: 24px;

    p {
      font-size: 15px;
    }
    h3 {
      font-size: 18px;
    }
  }

  .arrow {
    width: 30%;
    height: 27px;
  }
  @media (max-width: 1150px) {
    width: ${(props) => (props.card ? "65%" : "80%")};
  }
  @media (max-width: 820px) {
    width: ${(props) => (props.card ? "65%" : "85%")};
    margin: ${(props) => (props.card ? "0 0 0 15%" : "0 0 5% 10%")};
  }
  @media (max-width: 680px) {
    display: ${(props) => props.card && "none"};
    flex-direction: column;
    .text {
      margin-top: 5%;
      h3 {
        color: #f18820;
      }
    }
  }
  @media (max-width: 746px) {
    align-items: center;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 15px;
  height: clamp(250px, 100%, 400px);
  h2 {
    margin: 0;
    padding: 0;
    height: 40px;
  }
  p {
    margin: 0px;
    color: var(--grey);
    margin-bottom: 20px;
  }
  @media (max-width: 746px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
