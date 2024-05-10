import {
  Button,
  ButtonProps,
  Header,
  HeaderProps,
  createPolymorphicComponent,
} from "@mantine/core";
import styled from "@emotion/styled";

export const Main = styled.main`
  margin: 90px auto 0px auto;
  min-height: 100vh;
  overflow-x: hidden;
  @media (max-width: 575px) {
    margin: 0px auto 0px auto;
  }
  :before {
    content: "";
    position: fixed;
    width: 65%;
    height: 51%;
    left: 17.5%;
    top: 198px;
    border-radius: 50%;
    z-index: -1;
    background: #1b3f7e;
    filter: blur(100px);
  }
`;
export const ContainerLandingPage = styled.div`
  width: clamp(0px, 95vw, 1500px);
  padding: 0px 10px;
  min-height: 100vh;
  margin: 0 auto;

  -webkit-animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;
const StyleButtonSolicitar = styled(Button)`
  background: #ec8931;
  box-shadow: 3px 0px 150px #ec8931;
  border-radius: 10px;
`;

export const ButtonSolicitar = createPolymorphicComponent<
  "button",
  ButtonProps
>(StyleButtonSolicitar);

export const Navigation = styled(Header)``;
