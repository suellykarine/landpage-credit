import { HTMLProps } from "react";
export interface ICustomDiv extends HTMLProps<HTMLDivElement> {
  card?: boolean;
}
export interface IDataCardsHowStart {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isArrow?: boolean;
  isArrowUp?: boolean;
}
export interface IDataTextsHowStart {
  title: string;
  description: string;
}
