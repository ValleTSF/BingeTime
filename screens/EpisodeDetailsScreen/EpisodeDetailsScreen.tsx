import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import * as S from "./styled";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenRoutes } from "../../App";
import { removeHTMLTagsFromString } from "../../utils";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.EPISODE_DETAILS_SCREEN
>;

const EpisodeDetailsScreen = ({ route }: Props) => {
  const { episode } = route.params;

  const imageUri = episode.image
    ? episode.image.original
    : "https://britchamvn.com/no-image.jpeg";

  const formattedSummary = removeHTMLTagsFromString(episode.summary);

  return (
    <S.Container>
      <Image
        style={{ marginTop: 20, height: "30%", width: "100%" }}
        source={{ uri: imageUri }}
      />
      <S.HeaderContainer>
        <S.Title>{episode.name}</S.Title>
        <S.RatingContainer>
          <S.RatingIcon name="star" />
          <S.Rating>{episode.rating.average} / 10</S.Rating>
        </S.RatingContainer>
        <S.EpisodeAndSeason>
          <S.EpisodeAndSeasonText>S.{episode.season}</S.EpisodeAndSeasonText>
          <S.EpisodeAndSeasonText>E.{episode.number}</S.EpisodeAndSeasonText>
        </S.EpisodeAndSeason>
        <S.Runtime>Runtime: {episode.runtime} min</S.Runtime>
        <S.Summary>{formattedSummary}</S.Summary>
      </S.HeaderContainer>
    </S.Container>
  );
};

export default EpisodeDetailsScreen;
