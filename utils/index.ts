import { Episode } from "../types";

const regexForHTMLTagRemoval = /(<([^>]+)>)/gi;

export const removeHTMLTagsFromString = (string: string) => {
  return string.replaceAll(regexForHTMLTagRemoval, "");
};

export const getShowIdFromEpisodeShowLink = (string: string) => {
  return string.substring(string.lastIndexOf("/") + 1, string.length);
};

export enum ScreenRoutes {
  HOME_SCREEN = "screen/HomeScreen",
  EPISODE_DETAILS_SCREEN = "screen/EpisodeDetailsScreen",
}

export type RootStackParamList = {
  [ScreenRoutes.HOME_SCREEN]: undefined;
  [ScreenRoutes.EPISODE_DETAILS_SCREEN]: { episode: Episode };
};
