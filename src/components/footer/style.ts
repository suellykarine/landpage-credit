import styled from "styled-components";
import { Paper, Text } from "@mantine/core";
export const ContainerFooter = styled.div`
  height: 100%;
  width: clamp(0px, 95vw, 1500px);
  margin: 0 auto;
  padding: 0;
`;
export const FooterWrapper = styled(Paper)`
  padding: 24px;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  width: 100%;
  background: linear-gradient(180deg, rgba(27, 63, 126, 0) 0%, #1b3f7e 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--new-white);
  padding-left: 0px;
  .grid {
    width: 100%;
    color: var(--gray);
    justify-content: space-between;
  }
  .column-name {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: -15px;
  }
`;

export const LogoImage = styled.img``;

export const SocialLinksWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  max-width: 60px;
  a{
    margin-right: 5px;
  }
 
 
`;

export const CopyrightText = styled(Text)`
  margin-top: 16px;
  color: var(--white);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  p {
    margin: 0px;
    color: var(--white);
    white-space: nowrap;
  }
  a {
    margin-top: 20px;
    text-decoration: none;
    color: var(--white);
  
  }
`;
