import { View, Text, FlatList } from "react-native";
import React from "react";
import { CastMember } from "../../../../types";
import CastCarouselItem from "./CastCarouselItem";
import * as S from "./styled";

type Props = {
  cast: CastMember[];
};

const CastCarousel = ({ cast }: Props) => {
  return (
    <S.Container>
      <S.Title>Cast</S.Title>
      <FlatList
        renderItem={({ item: castMember }) => (
          <CastCarouselItem castMember={castMember}></CastCarouselItem>
        )}
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </S.Container>
  );
};

export default CastCarousel;
