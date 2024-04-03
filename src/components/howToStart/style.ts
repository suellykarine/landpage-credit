import styled from "styled-components";

export const HowToStartContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: var(--white);

  button {
    position: static;
  }
`;

export const MainSectionContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  padding-top: 90px;

  h2 {
    font-size: 32px;
    margin-top: 22px;
  }
  p {
    margin-top: -18px;
  }

  @media (min-width: 1024px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const CardsContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;

  .card {
    width: 400px;
    height: 128px;
    padding: 10px 20px 20px 20px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 18px;

    @media (min-width: 880px) {
      width: 488px;
      padding: 10px 52px 20px 20px;
    }

    @media (max-height: 727px) {
      height: 120px;
    }

    @media (max-height: 702px) {
      height: 95px;
    }

    color: var(--grey);
    h3 {
      color: var(--white);
      margin-bottom: 10px;
      margin-top: 0px;

      @media (max-height: 702px) {
        margin-bottom: 0px;
      }
    }
  }

  .card + .card {
    margin-top: 10px;
  }

  @media (max-height: 702px) {
    .card + .card {
      margin-top: 5px;
    }
  }
`;

export const Div = styled.div`
  h1 {
    margin-bottom: 18px;
  }

  p {
    margin: 0px;
    margin-bottom: 37px;
    color: var(--grey);
  }
`;
