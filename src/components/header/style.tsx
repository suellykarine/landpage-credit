import styled from "styled-components";
export const HeaderContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(8px);
  width: 100%;
  top: 0;

  a {
    text-decoration: none;
  }
  .mantine-Header-root {
    width: 100%;
    height: 90px;
    background-color: transparent;
    border: none;
  }
  #header-container {
    max-width: none;
    width: clamp(1024px, 95vw, 1800px);
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    width: 55%;
    a {
      font-weight: 400;
      font-size: 16px;
      color: var(--white);
      text-decoration: none;
      line-height: 19px;
      transition: 0.1s;
      :hover {
        transition: 0.1s;
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 1200px) {
    .navigation {
      a {
        font-size: 12px;
      }
    }
  }
  #plataform-access {
    width: 218px;
    height: 50px;
    background: var(--secondary-color);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 14px;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      filter: brightness(1.05);
      transition: 0.3s;
      transform: scale(1.03);
    }
  }
`;
