import { Image } from "react-native";
import React from "react";
import { CastMember } from "../../types";
import * as S from "./styled";

type Props = {
  castMember: CastMember;
};

const CastCarouselItem = ({ castMember }: Props) => {
  const imageUri = castMember.person.image
    ? castMember.person.image.medium
    : "https://britchamvn.com/no-image.jpeg";

  return (
    <S.CastMemberCard>
      <Image style={{ width: 150, height: 150 }} source={{ uri: imageUri }} />
      <S.CastName>{castMember.person.name}</S.CastName>
      <S.CharacterName>{castMember.character.name}</S.CharacterName>
    </S.CastMemberCard>
  );
};

export default CastCarouselItem;
