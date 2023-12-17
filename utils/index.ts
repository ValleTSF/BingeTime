const regexForHTMLTagRemoval = /(<([^>]+)>)/gi;

export const removeHTMLTagsFromString = (string: string) => {
  return string.replaceAll(regexForHTMLTagRemoval, "");
};
