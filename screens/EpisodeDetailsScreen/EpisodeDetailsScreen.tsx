import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenRoutes } from "../../App";
import {
  getShowIdFromEpisodeShowLink,
  removeHTMLTagsFromString,
} from "../../utils";
import { getCastFromShow } from "../../api";
import CastCarousel from "../../components/CastCarousel";
import { CastMember } from "../../types";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.EPISODE_DETAILS_SCREEN
>;

const EpisodeDetailsScreen = ({ route }: Props) => {
  const [cast, setCast] = useState<CastMember[]>([]);
  const { episode } = route.params;

  const formattedSummary = removeHTMLTagsFromString(episode.summary);
  const showId = getShowIdFromEpisodeShowLink(episode._links.show.href);
  const imageUri = episode.image
    ? episode.image.original
    : "https://britchamvn.com/no-image.jpeg";

  console.log("showid", showId);

  useEffect(() => {
    getCastFromShow(showId).then((cast) => setCast(cast));
  }, []);

  return (
    <S.Container
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Image
        style={{ height: "30%", width: "100%" }}
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
        <S.Runtime>{episode.runtime} min</S.Runtime>
        <S.Summary>{formattedSummary}</S.Summary>
      </S.HeaderContainer>
      <CastCarousel cast={cast} />
    </S.Container>
  );
};

export default EpisodeDetailsScreen;
