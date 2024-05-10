interface IProfile {
  photo: string;
  type: string;
  description: string;
}

export const profiles: IProfile[] = [
  {
    photo: "./pf.svg",
    type: "Investidor Pessoa Física",
    description:
      "Os FIDCs finalmente chegaram ao acesso do investidor pessoa física, um tipo de investimento de renda fixa cuja rentabilidade gira em torno de 120% do CDI. ",
  },
  {
    photo: "./familyOffice.svg",
    type: "Family Office Asset",
    description:
      "O family office é uma estrutura montada para famílias com um grande patrimônio, geralmente donas de empresas multinacionais, que necessitam de uma assistência completa, incluindo o setor jurídico, contábil, fiscal e de investimentos",
  },
  {
    photo: "./investidor.svg",
    type: "Investidor Institucional",
    description:
      "Investidor Institucional é uma instituição que gere o capital de terceiros, buscando aplicar este montante em aplicações financeiras lucrativas para seus cotistas.",
  },
  {
    photo: "./licenciadoWefin.svg",
    type: "Licenciado Wefin",
    description:
      "Investidores que apresentam uma elevada quantia em investimentos e que detêm conhecimentos adequados sobre investimentos financeiros e os riscos envolvidos.",
  },
];
