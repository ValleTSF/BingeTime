const baseUri = "https://api.tvmaze.com/";
const singleSearchUri = "singlesearch/shows?q=";
const endUri = "&embed=episodes";

export const getTvShowsBySearch = (input: string) => {
  const query = baseUri + singleSearchUri + input + endUri;

  return fetch(query)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => console.log("error", error));
};
