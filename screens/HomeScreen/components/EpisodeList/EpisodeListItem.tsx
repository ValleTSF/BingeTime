import React from "react";
import { Text } from "react-native";
import { Episode } from "../../../../types";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenRoutes } from "../../../../utils";

type Props = {
  episode: Episode;
};

const EpisodeListItem = ({ episode }: Props) => {
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
      <S.EpisodeThumbnail source={{ uri: imageUri }} />
      <S.EpisodeInformationContainer>
        <S.EpisodeTitle>{episode.name}</S.EpisodeTitle>
        <Text>Season: {episode.season}</Text>
        <Text>Episode: {episode.number}</Text>
      </S.EpisodeInformationContainer>
    </S.EpisodeContainer>
  );
};

export default EpisodeListItem;
