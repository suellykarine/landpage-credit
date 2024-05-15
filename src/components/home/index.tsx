import { DivMain, DivText, ImageHome, DivImage } from "./style";
import InviteButton from "../inviteButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SectionHome = () => {
  function scrollToDiv() {
    const divTarget = document.getElementById("section3");

    const topPos = divTarget!.offsetTop;

    window.scrollTo({
      top: topPos + 50,
      behavior: "smooth",
    });
  }

  return (
    <DivMain id="section1">
      <DivText>
        <div>
          <h1>
            A plataforma para você investir com facilidade em Operações de
            Crédito
          </h1>
          <span className="subtitle">
            A segurança da negociação aprovada pelo time da SRM Asset.
          </span>
        </div>
        <InviteButton text="SAIBA MAIS" onClick={scrollToDiv} />
      </DivText>
      <DivImage>
        <Image
          src="/homeImage.svg"
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
