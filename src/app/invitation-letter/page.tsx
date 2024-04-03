"use client";
import { Form } from "@component/components/form";
import { ContainerInvitationLetter, DivIcon } from "./style";
import { useState } from "react";
import { ResponseInvitationLetter } from "@component/components/responseInvitationLetter";
import { ArrowBigLeft } from "tabler-icons-react";
import Link from "next/link";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function InvitationPage() {
  const [isSucess, setIsSuccess] = useState(false);

  return (
    <MantineProvider>
      <Notifications limit={1} />

      <DivIcon>
        <Link href="/">
          <ArrowBigLeft size={48} strokeWidth={1} color={"#ec8931"} />
        </Link>
      </DivIcon>
      <ContainerInvitationLetter>
        {isSucess ? (
          <ResponseInvitationLetter setIsSuccess={setIsSuccess} />
        ) : (
          <Form setIsSuccess={setIsSuccess} />
        )}
      </ContainerInvitationLetter>
    </MantineProvider>
  );
}
