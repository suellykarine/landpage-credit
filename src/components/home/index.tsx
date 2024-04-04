import { DivMain, DivText, ImageHome, DivImage, DivBackground } from "./style";
import InviteButton from "../inviteButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SectionHome = () => {
  const route = useRouter();
  function onClick() {
    const plataformLink = process.env.NEXT_PUBLIC_PLATAFORM_LINK;
    route.push(`${plataformLink}invitation-letter`);
  }

  return (
    <DivMain id="section1">
      <DivText>
        <p>CREDIT CONNECT</p>
        <h1>
          A plataforma de mercado secundário de ativos de créditos do Brasil
        </h1>
        <span className="subtitle">
          Faça suas operações pelo Credit Connect
        </span>
        <InviteButton text="SOLICITE SUA CARTA CONVITE" onClick={onClick} />
      </DivText>
      <DivBackground />
      <DivImage>
        <Image
          src="/imageHome.svg"
          alt="ImagemHome"
          width="100"
          height="100"
          priority={true}
        />
      </DivImage>
    </DivMain>
  );
};

export default SectionHome;
