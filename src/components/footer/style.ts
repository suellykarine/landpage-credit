import styled from "styled-components";
import { Paper, Text } from "@mantine/core";

export const FooterWrapper = styled(Paper)`
  padding: 24px;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  width: 100%;
  background: linear-gradient(180deg, rgba(27, 63, 126, 0) 0%, #1b3f7e 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #ecf1f0;
  position: absolute;
  bottom: 0px;
  padding-left: 0px;
  .grid {
    margin-right: 28px;
    margin-left: 30px;
    color: var(--grey);
  }
  .column-name {
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    .grid {
      margin-right: 78px;
      margin-left: 90px;
      justify-content: space-between;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: -15px;
  }
`;

export const LogoImage = styled.img`
  margin-right: 12px;
`;

export const SocialLinksWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  max-width: 132px;
`;

export const CopyrightText = styled(Text)`
  margin-top: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  p {
    margin: 0px;
    color: #b6b6b6;
    white-space: nowrap;
  }
  a {
    margin-top: 20px;
    text-decoration: none;
    color: #b6b6b6;
  }
`;
