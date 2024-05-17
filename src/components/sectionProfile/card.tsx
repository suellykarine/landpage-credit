import { Container, Img, StyledCard, TextTitle } from "./style";

interface IProfile {
  photo: string;
  type: string;
}

interface ICardProps {
  profile: IProfile;
}

const Card = ({ profile }: ICardProps) => {
  return (
    <StyledCard>
      <Img src={profile.photo} alt="Nome do Investidor" width="5" height="5" />
      <div className="typeInvestor">
        <TextTitle>{profile.type}</TextTitle>
      </div>
    </StyledCard>
  );
};

export default Card;
