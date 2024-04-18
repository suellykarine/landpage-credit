import styled from "styled-components";

export const HowToStartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  color: var(--white);
  button {
    position: static;
  }
  @media (max-width: 1200px) {
  }
`;

export const MainSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 32px;
    margin-top: 22px;
  }
  p {
  }
  @media (max-width: 746px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  height: 400px;

  .card {
    width: clamp(350px, 100%, 400px);
    height: clamp(128px, auto, 200px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    .mantine-Text-root {
      width: 80%;
    }
    color: var(--grey);
    h3 {
      width: 80%;
      color: var(--white);
      margin: 0;
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
