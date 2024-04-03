import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ContainerResponseInvitationLetter } from "./style";
import { SetStateAction } from "react";
interface IResponseProps {
  setIsSuccess: React.Dispatch<SetStateAction<boolean>>;
}
export function ResponseInvitationLetter({ setIsSuccess }: IResponseProps) {
  const router = useRouter();
  const OnClick = async () => {
    router.replace("/");
    setIsSuccess(false);
  };
  return (
    <ContainerResponseInvitationLetter>
      <div className="big-box">
        <div className="small-box">
          <Link onClick={OnClick} href={"/"} id="link-home">
            <Image
              src="/arrowInvitationLetter.svg"
              height={72}
              width={77}
              alt="logotipo"
            ></Image>
          </Link>
          <p id="paragraph-response-invitation">
            Sua solicitação foi enviada com sucesso! Aguarde no seu e-mail o
            retorno do time{" "}
            <span>
              Credit<b>Connect</b>.
            </span>
          </p>
        </div>
      </div>
    </ContainerResponseInvitationLetter>
  );
}
