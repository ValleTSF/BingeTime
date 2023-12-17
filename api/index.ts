const baseUri = "https://api.tvmaze.com/";

export const getEpisodesSingleSearch = (input: string) => {
  const singleSearchUri = `singlesearch/shows?q=${input}/&embed=episodes`;
  const query = baseUri + singleSearchUri;

  return fetch(query)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log("error", error));
};

export const getCastFromShow = (id: string) => {
  const castURI = `shows/${id}/cast`;
  const query = baseUri + castURI;

  return fetch(query)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log("error", error));
};
