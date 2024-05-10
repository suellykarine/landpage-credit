import styled from "styled-components";
export const HeaderContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(8px);
  width: 100%;
  top: 0;
  padding: 0;
  a {
    text-decoration: none;
  }
  .mantine-Header-root {
    width: 100%;
    height: 90px;
    background-color: transparent;
    border: none;
    padding: 0px;
  }
  .mantine-d9zk78 {
    padding: 0 !important;
  }
  #header-container {
    max-width: none;
    width: clamp(0px, 95vw, 1500px);
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
  .containerButtons {
    display: flex;
    margin-left: 15px;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    max-width: 400px;
    height: 100%;
  }

  #plataform-access {
    width: 49%;
    width: clamp(100px, 49%, 280px);
    height: 35px;
    border-radius: 6px;
    padding: 10px;
    background: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 10px;
    transition: 0.2s;
    text-align: center;
    :nth-last-child(1) {
      background-color: transparent;
      border: 1px solid var(--secondary-color);
    }
    &:hover {
      cursor: pointer;
      filter: brightness(1.05);
      transition: 0.3s;
      transform: scale(1.03);
    }
  }

  @media (max-width: 1200px) {
    .navigation {
      display: none;
    }
    .containerButtons {
      width: 45%;
    }
    #plataform-access {
      height: 35px;
      border-radius: 8px;
    }
  }
  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    .containerButtons {
      width: 50%;
    }
    #plataform-access {
      height: 40px;
      max-width: 200px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  @media (max-width: 575px) {
    position: static;
    height: 120px;
    display: flex;
    #header-container {
      height: 120px;
      width: 100vw;
      display: flex;
      flex-direction: column;
      img {
        padding: 20px 0px 10px 0px;
      }
    }
    .containerButtons {
      width: 90%;
      max-width: 1200px;
      display: flex;
      justify-content: center;
      column-gap: 20px;
      padding: 10px;
    }
    #plataform-access {
      height: 40px;
      max-width: 200px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  @media (max-width: 479px) {
  }

  @media (max-width: 320px) {
    .containerButtons {
      margin: 0;
      gap: 4px;
    }
    #plataform-access {
      height: 40px;
      max-width: 200px;
      border-radius: 8px;
      font-weight: 400;
      margin: 0;
      gap: 0;
      font-size: 8px;
    }
  }
  @media (max-width: 200px) {
    position: static;
    .containerButtons {
      padding: 0;
      font-size: 10px;
    }
  }
`;
