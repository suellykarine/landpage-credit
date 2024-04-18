import {
  Container,
  Img,
  StyledCard,
  TextDescription,
  TextTitle,
} from "./style";

interface IProfile {
  photo: string;
  type: string;
  description: string;
}

interface ICardProps {
  profile: IProfile;
}

const Card = ({ profile }: ICardProps) => {
  return (
    <StyledCard>
      <Img
        src={profile.photo}
        alt="Nome do Investidor"
        width="10"
        height="10"
      />
      <div>
        <TextTitle>{profile.type}</TextTitle>
      </div>
      <div>
        <TextDescription>{profile.description}</TextDescription>
      </div>
    </StyledCard>
  );
};

export default Card;
