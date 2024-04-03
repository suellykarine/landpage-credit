import styled from "styled-components";
import { roboto } from "../globals";

export const ContainerInvitationLetter = styled.main`
  * {
    font-family: ${roboto.style.fontFamily};
  }
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("/bg-form.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DivIcon = styled.div`
  margin-left: 10%;
  margin-top: 10px;
`;
