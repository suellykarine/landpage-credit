import styled from "@emotion/styled";
import { Image } from "@mantine/core";

export const DivMain = styled.section`
  height: 99vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 1200px) {
  }
  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 575px) {
  }

  @media (max-width: 479px) {
    padding: 10px;
  }

  @media (max-width: 320px) {
  }
`;

export const DivText = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  color: #ffffff;
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8% 0 0 5%;

  button {
    margin-top: 25px;
    position: static;
    min-height: 50px;
    justify-self: flex-end;
  }
  h1 {
    font-weight: 700;
    width: 600px;
    font-size: 52px;
  }
  .subtitle {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    h1 {
      width: 600px;
    }
  }

  @media (max-width: 767px) {
    height: 200px;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    h1 {
      width: 100%;
      font-size: 2rem;
    }
    button {
      display: none;
      margin: 0 auto;
    }
    align-items: center;
  }

  @media (max-width: 575px) {
    div {
      margin: 0;
    }
    h1 {
      width: 100%;
      font-size: 2rem;
    }
  }

  @media (max-width: 479px) {
  }

  @media (max-width: 320px) {
    h1,
    p,
    span,
    .subtitle {
      font-size: 1rem;
    }
  }
  @media (max-width: 200px) {
    h1,
    p,
    span,
    .subtitle {
      font-size: 10px;
    }
  }
`;

export const DivImage = styled.div`
  width: clamp(700px, 80%, 700px);
  height: clamp(400px, 80%, 1800px);

  margin-right: 5%;
  background: radial-gradient(
    60.11% 60.19% at 37.13% 40.05%,
    rgba(69, 120, 250, 0.9) 0%,
    rgba(56, 80, 203, 0.2) 40%,
    rgba(24, 34, 87, 0.008) 70%,
    transparent 100%
  );

  img {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(250px, 100%, 800px);
    height: clamp(250px, 100%, 800px);
    height: 50%;
    img {
      height: 100%;
      width: 100%;
    }
    margin: 0;
  }

  @media (max-width: 575px) {
  }

  @media (max-width: 479px) {
  }

  @media (max-width: 320px) {
  }
`;

export const ImageHome = styled(Image)`
  width: 90%;
  height: 90%;

  @media (max-width: 1200px) {
  }
  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 575px) {
  }

  @media (max-width: 479px) {
  }

  @media (max-width: 320px) {
  }
`;
