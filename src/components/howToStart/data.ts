import { IDataCardsHowStart, IDataTextsHowStart } from "./interface";

export const dataCards: Array<IDataCardsHowStart> = [
  { src: "/sendHowStart.png", alt: "send", width: 60, height: 60 },
  {
    src: "/arrowUpHowStart.png",
    alt: "arrowUp",
    isArrow: true,
    isArrowUp: true,
  },
  { src: "/formHowStart.png", alt: "form", width: 60, height: 60 },
  { src: "/arrowDownHowStart.png", alt: "arrowDown", isArrow: true },
  { src: "/computerHowStart.png", alt: "computer", width: 60, height: 60 },
];

export const dataTexts: Array<IDataTextsHowStart> = [
  {
    title: "Solicite sua Carta Convite",
    description: "Sua conta e identidade pessoal são garantidamente seguras.",
  },
  {
    title: "Preencha o Cadastro",
    description:
      "Após o cadastro, você recebe um e-mail no time CreditConnect para autenticação.",
  },
  {
    title: "Iniciar Portfólio de Investimentos",
    description: "Após Login você tem acesso as funcionalidades da plataforma.",
  },
];
