import * as Yup from "yup";
import { isCompanyEmail } from "company-email-validator";

const validateCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf === "" || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0,
    remainder;
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};

const validateCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]+/g, "");
  if (cnpj === "" || cnpj.length !== 14) return false;

  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  const digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  length = length + 1;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};

export const schemaInvitationLetter = Yup.object().shape({
  nome: Yup.string()
    .matches(/^[\p{L} '-]+$/u, "Nome completo obrigatório")
    .required("Campo Obrigatório"),
  empresa: Yup.string().required("Campo Obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .test(
      "is-company-email",
      "Digite um e-mail de empresa válido",
      function (value) {
        return isCompanyEmail(value || "");
      }
    )
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido")
    .required("Campo Obrigatório"),
  telefone: Yup.string().required("Campo Obrigatório"),
  termosAceitos: Yup.boolean()
    .required(
      "É necessário aceitar os Termos de Serviços e Política de Privacidade"
    )
    .oneOf(
      [true],
      "É necessário aceitar os Termos de Serviços e Política de Privacidade"
    ),
  cpf: Yup.string()
    .required("Campo Obrigatório")
    .test("is-valid-cpf", "CPF inválido", (value) => validateCPF(value || "")),
  cnpj: Yup.string()
    .required("Campo Obrigatório")
    .test("is-valid-cnpj", "CNPJ inválido", (value) =>
      validateCNPJ(value || "")
    ),
});
