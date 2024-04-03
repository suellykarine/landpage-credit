import {
  Button,
  ButtonProps,
  Header,
  HeaderProps,
  createPolymorphicComponent,
} from "@mantine/core";
import styled from "@emotion/styled";

export const Main = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

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
