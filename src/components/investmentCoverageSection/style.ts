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
  padding: 0;

  button {
    margin-top: 10px;
    position: static;
  }
  p {
    width: 90%;
    margin: 0;
  }
  h2 {
    margin: 0;
    font-size: 32px;
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
  overflow: hidden;
  border-radius: 17px;
  width: 50%;
  height: 70%;

  img {
    width: 100%;
    height: 100%;
    min-width: 647px;
    min-height: 684px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
