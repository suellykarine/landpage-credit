interface IinvitServiceProps {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  mensagem: string;
}
export const invitLetterServicePost = async (props: IinvitServiceProps) => {
  const url = "http://localhost:3000/";
  const res = await fetch(`${url}api/invitation-letter`, {
    method: "POST",
    body: JSON.stringify(props),
  });
  return res.json();
};
