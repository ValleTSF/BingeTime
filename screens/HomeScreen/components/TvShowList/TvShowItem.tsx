import React from "react";
import { View, Text, Image } from "react-native";
import { Episode, Tvshow } from "../../../../types";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, ScreenRoutes } from "../../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  episode: Episode;
};

const TvShowItem = ({ episode }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (!episode) {
    return null;
  }

  const imageUri = episode.image
    ? episode.image.medium
    : "https://britchamvn.com/no-image.jpeg";

  return (
    <S.EpisodeContainer
      onPress={() =>
        navigation.navigate(ScreenRoutes.EPISODE_DETAILS_SCREEN, {
          episode,
        })
      }
    >
      <Image style={{ width: 150, height: 100 }} source={{ uri: imageUri }} />
      <S.EpisodeInformationContainer>
        <S.EpisodeTitle>{episode.name}</S.EpisodeTitle>
        <Text>Season: {episode.season}</Text>
        <Text>Episode: {episode.number}</Text>
      </S.EpisodeInformationContainer>
    </S.EpisodeContainer>
  );
};

export default TvShowItem;
