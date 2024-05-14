import styled from "styled-components";

export const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  padding: 10px;
  @media (max-width: 1200px) {
    justify-content: center;
    overflow: hidden;
    gap: 15px;
  }
`;
