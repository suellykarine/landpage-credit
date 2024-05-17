import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    height: 100vh;
  }
`;

export const InvestmentCoverageDiv = styled.div`
  width: 50%;
  max-width: 455.4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-left: 5%;
  padding: 0;

  button {
    margin-top: 10px;
    position: static;
  }
  p {
    width: 80%;
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: #ffffff;
  }
  h2 {
    margin: 0;
    font-size: 32px;
  }
  @media (max-width: 1190px) {
    p {
      width: 90%;
      font-size: 22px;
    }
  }
  @media (max-width: 991px) {
    gap: 15px;
  }
  @media (max-width: 767px) {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Span = styled.span`
  color: #ec8931;
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 8%;
  overflow: hidden;
  border-radius: 17px;
  width: 50%;
  height: 70%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1190px) {
    height: 80%;
    width: 70%;
    img {
      width: 100%;
      height: 150%;
    }
  }
`;
