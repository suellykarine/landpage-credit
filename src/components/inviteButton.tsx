import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonStyled = styled.button`
  width: 287px;
  height: 50px;
  background: #ec8931;
  box-shadow: 3px 0px 150px #ec8931;
  border-radius: 10px;
  border: 0;
  left: 111px;
  top: 564px;
  position: absolute;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
    transition: 0.3s;
    transform: scale(1.03);
  }

  &:active {
    transform: translateY(4px);
  }
`;

const InviteButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <span>{text}</span>
    </ButtonStyled>
  );
};

export default InviteButton;
