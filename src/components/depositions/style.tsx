import { inter } from "@component/app/globals";
import styled from "styled-components";

export const SectionDeposition = styled.section`
  width: 100%;
  max-width: 1700px;
  margin: 90px auto;
  border-radius: 16px;
  background-color: var(--deposition-blue);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  figure {
    margin: 0;
    padding: 0;
    width: 50%;
    overflow: hidden;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    img {
      width: 100%;
      height: 100%;
      min-width: 750px;
      transform: scaleX(-1);
    }
  }
  article {
    width: 50%;
    height: 400px;
    margin: 0;
    margin-left: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-betweens;
    align-items: start;
    position: relative;
    top: 60px;

    .initial-deposition {
      margin: 0;
      font-family: ${inter.style.fontFamily};
      font-weight: 700;
      font-size: 96px;
      color: var(--white);
      height: 60px;
    }
    div {
      height: 194px;
      p {
        max-width: 540px;
        font-weight: 700;
        font-size: 24px;
        color: var(--white);
        height: 90px;
        cursor: default;
      }
    }
    #by {
      height: 70px;
      p {
        font-size: 16px;
      }
    }
  }
`;
