import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  display: flex;
  color: #ffffff;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin-top: 15px;
  padding-left: 98px;
  padding-right: 111px;
  @media (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 70px;
  }
`;

export const InvestmentCoverageDiv = styled.div`
  width: 455.4px;
  display: flex;
  flex-direction: column;

  button {
    position: static;
    margin-top: 60px;
  }

  p {
    margin-bottom: 18px;
    margin-top: 0px;
    width: 90%;
  }

  h2 {
    font-size: 32px;
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;

export const Span = styled.span`
  color: #ec8931;
`;

export const ImageDiv = styled.div`
  margin-left: 25px;
  overflow: hidden;
  border-radius: 17px;
  width: 50%;
  height: 88%;

  img {
    width: 100%;
    height: 100%;
  }
`;
