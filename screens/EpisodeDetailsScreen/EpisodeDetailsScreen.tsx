import { useEffect, useState } from "react";
import * as S from "./styled";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  RootStackParamList,
  ScreenRoutes,
  getShowIdFromEpisodeShowLink,
} from "../../utils";
import { getCastFromShow } from "../../api";
import CastCarousel from "./components/CastCarousel";
import { CastMember } from "../../types";
import EpisodeInfo from "./components/EpisodeInfo";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.EPISODE_DETAILS_SCREEN
>;

const EpisodeDetailsScreen = ({ route }: Props) => {
  const [cast, setCast] = useState<CastMember[]>([]);
  const { episode } = route.params;

  const showId = getShowIdFromEpisodeShowLink(episode._links.show.href);
  const imageUri = episode.image
    ? episode.image.original
    : "https://britchamvn.com/no-image.jpeg";

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
      <S.EpisodeImage source={{ uri: imageUri }} />
      <EpisodeInfo episode={episode} />
      <CastCarousel cast={cast} />
    </S.Container>
  );
};

export default EpisodeDetailsScreen;
