import styled from "styled-components";

export const DepositionSection = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: 1000px) {
    display: none;
  }

  .mantine-Carousel-slide {
    display: flex;
    align-items: center;
    border-radius: 16px;
  }
  .mantine-Carousel-controls button {
    display: none;
  }
  .mantine-Carousel-indicators button {
    z-index: 1;
    color: white;
    width: 55px;
    height: 8px;
    background-color: var(--white);
    position: relative;
    bottom: 10vh;
    left: 150px;
    border-radius: 0;
    border: 3px solid transparent;
    opacity: 0.3;
    border-radius: 8px;

    transition: 1.5s;
    &[data-active] {
      border-radius: 0;
      opacity: 1;
      border: 3px solid transparent;
      border-radius: 10px;
      background-color: var(--white);
    }
  }
  /* @media (max-width: 991px) {
    display: none;
  } */
`;
