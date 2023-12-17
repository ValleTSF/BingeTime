const regexForHTMLTagRemoval = /(<([^>]+)>)/gi;

export const removeHTMLTagsFromString = (string: string) => {
  return string.replaceAll(regexForHTMLTagRemoval, "");
};

export const getShowIdFromEpisodeShowLink = (string: string) => {
  return string.substring(string.lastIndexOf("/") + 1, string.length);
};
