"use client";
import Image from "next/image";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { ContainerForm, PrivacyPoliceContainer } from "./style";
import { schemaInvitationLetter } from "./Schema";
import { useId } from "@mantine/hooks";
import { Checkbox, Input, InputBase } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { invitationLetter } from "../../database/invitationLetter";
import { invitLetterServicePost } from "@component/services/invitLetterService";
import { notifications } from "@mantine/notifications";
import PhoneInput from "../PhoneInput";
import { IMaskInput } from "react-imask";

interface IFormProps {
  setIsSuccess: React.Dispatch<SetStateAction<boolean>>;
}
export function Form({ setIsSuccess }: IFormProps) {
  const id = useId();

  const form = useForm({
    initialValues: {
      nome: "",
      cpf: "",
      telefone: "",
      cnpj: "",
      email: "",
    },
    validate: yupResolver(schemaInvitationLetter),
  });
  const onSubmit = async (data: any) => {
    data.mensagem = "Carta convite solicitada via website";
    invitLetterServicePost(data)
      .then((res) => {
        if (res.mensagem === "carta convite criada") {
          setIsSuccess(true);
        } else {
          notifications.show({
            title: "Error",
            color: "red",
            message: res.mensagem,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <ContainerForm>
      <div className="container-inside">
        <div className="Logo">
          <Link href={"/"} id="logo-link">
            {" "}
            <Image src="/Logo.svg" height={39} width={256} alt="logotipo" />
          </Link>
          <p id="Paragraph-under-logo">
            No formulário abaixo, insira seus dados e solicite sua Carta
            Convite.
          </p>
        </div>
        <form
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          className="formulary-invitation-letter"
        >
          <div className="Input-form big" id="name">
            <label id="label-name">Nome Completo*</label>
            <Input
              id="input-name"
              {...form.getInputProps("nome")}
              placeholder="Digite seu nome aqui"
            />
            {form.errors.nome && (
              <p className="error" id="error-input-name">
                {form.errors.nome}
              </p>
            )}
          </div>

          <div className="Input-form big" id="company">
            <label id="label-company">Empresa*</label>
            <Input
              id="input-company"
              {...form.getInputProps("empresa")}
              placeholder="Digite sua sempresa aqui"
            />
            {form.errors.empresa && (
              <p className="error" id="error-input-company">
                {form.errors.empresa}
              </p>
            )}
          </div>

          <div className="container-small-input">
            <div className="Input-form small" id="email">
              <label id="label-email">E-mail Corporativo*</label>
              <Input
                id="input-email"
                {...form.getInputProps("email")}
                placeholder="exemplo@xcompany.com"
              />
              {form.errors.email && (
                <p className="error" id="error-input-email">
                  {form.errors.email}
                </p>
              )}
            </div>

            <div className="Input-form small" id="phone">
              <label id="label-phone">Telefone*</label>
              <Input.Wrapper id={id} required maw={320} mx="auto">
                <div className="input-phone">
                  <PhoneInput
                    onBlur={(value: string) => {
                      form.setFieldValue("telefone", value);
                    }}
                  />
                </div>
              </Input.Wrapper>
              {form.errors.telefone && (
                <p className="error" id="error-input-phone">
                  {form.errors.telefone}
                </p>
              )}
            </div>
          </div>

          <div className="container-small-input">
            <div className="Input-form small" id="email">
              <label id="label-email">CPF*</label>
              <InputBase
                id="input-email"
                component={IMaskInput}
                mask="000.000.000-00"
                {...form.getInputProps("cpf")}
                placeholder="000.000.000-00"
              />
            </div>

            <div className="Input-form small" id="phone">
              <label id="label-phone">CNPJ*</label>
              <div className="input-phone">
                <InputBase
                  id="input-email"
                  {...form.getInputProps("cnpj")}
                  component={IMaskInput}
                  placeholder="00.000.000/0001-00"
                  mask="00.000.000/0001-00"
                />
              </div>
            </div>
          </div>

          <PrivacyPoliceContainer>
            <div>
              <input type="checkbox" {...form.getInputProps("termosAceitos")} />

              <p id="paragraph-privacy">
                Ao continuar, você concorda com os{" "}
                <Link
                  href="https://www.srmasset.com/wp-content/uploads/2021/08/SRM-Política-de-Privacidade-e-Tratamento-de-Dados-Pessoais-01.07.2021.pdf"
                  target="blank"
                >
                  Termos de Serviços
                </Link>{" "}
                e{" "}
                <Link
                  href="https://www.srmasset.com/wp-content/uploads/2021/08/SRM-Política-de-Privacidade-e-Tratamento-de-Dados-Pessoais-01.07.2021.pdf"
                  target="blank"
                >
                  Política de Privacidade
                </Link>{" "}
                do CreditConnect.
              </p>
            </div>

            {form.errors.termosAceitos && (
              <p className="error" id="error-input-termsAccepted">
                {form.errors.termosAceitos}
              </p>
            )}
          </PrivacyPoliceContainer>

          <button type="submit" id="submit-button">
            Continuar
          </button>
        </form>
      </div>
    </ContainerForm>
  );
}
