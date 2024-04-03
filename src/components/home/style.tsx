import styled from "@emotion/styled";
import { Image } from "@mantine/core";

export const DivMain = styled.div`
  width: 98.9vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    justify-content: space-around;
    width: 1000px;
  }
`;

export const DivText = styled.div`
  color: #ffffff;
  width: 49%;
  height: 400px;
  margin: 2rem 0 3rem -2rem;
  p {
    font-weight: 700;
    font-size: 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 52px;
    margin-top: -30px;
    margin-bottom: -2px;
  }
  .subtitle {
    font-size: 18px;
  }
  button {
    margin-top: 3%;
  }
  @media (min-width: 2000px) {
    button {
      margin-top: 5%;
      margin-left: 2%;
    }
  }
  @media (max-width: 1230px) {
    width: 55%;
    margin-left: 0 h1 {
      font-size: 48px;
    }
    .subtitle {
      font-size: 14px;
    }
  }
`;

export const DivBackground = styled.div`
  position: absolute;
  left: 58.92%;
  right: 9.62%;
  top: 1.76%;
  bottom: 81.82%;

  background: radial-gradient(
    50.19% 50.11% at 47.13% 50.05%,
    #fa45c1 0%,
    #cb389d 21%,
    #571843 67%,
    #000000 100%
  );
  background-blend-mode: color-dodge;
  mix-blend-mode: color-dodge;
  opacity: 0.5;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const DivImage = styled.div`
  width: 35%;
  height: 70%;
  margin-top: 8rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageHome = styled(Image)`
  width: 90%;
  height: 90%;
`;
