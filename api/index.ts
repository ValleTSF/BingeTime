const baseUri = "https://api.tvmaze.com/";

export const getEpisodesSingleSearch = (input: string) => {
  const singleSearchUri = "singlesearch/shows?q=";
  const endUri = "&embed=episodes";
  const query = baseUri + singleSearchUri + input + endUri;

  return fetch(query)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log("error", error));
};

export const getEpisodeInformation = (id: string) => {
  const episodeUri = `episodes/${id}`;
  const query = baseUri + episodeUri;

  return fetch(query)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log("error", error));
};
