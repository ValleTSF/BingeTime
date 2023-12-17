import { Episode } from "../../../../types";
import { removeHTMLTagsFromString } from "../../../../utils";
import * as S from "./styled";

type Props = {
  episode: Episode;
};

const EpisodeInfo = ({ episode }: Props) => {
  const formattedSummary = removeHTMLTagsFromString(episode.summary);
  return (
    <S.InformationContainer>
      <S.Title>{episode.name}</S.Title>
      <S.RatingContainer>
        <S.RatingIcon name="star" />
        <S.Rating>{episode.rating.average} / 10</S.Rating>
      </S.RatingContainer>
      <S.EpisodeAndSeason>
        S.{episode.season}E.{episode.number}
      </S.EpisodeAndSeason>
      <S.Runtime>{episode.runtime} min</S.Runtime>
      <S.Summary>{formattedSummary}</S.Summary>
    </S.InformationContainer>
  );
};

export default EpisodeInfo;
