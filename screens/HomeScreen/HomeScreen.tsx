import { useState } from "react";
import * as S from "./styled";
import { Episode, Tvshow } from "../../types";
import EpisodeList from "./components/EpisodeList";
import SearchBar from "./components/SearchBar";

const HomeScreen = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Tvshow | null>();
  const [filteredEpisodeResult, setFilteredEpisodeResult] = useState<
    Episode[] | null
  >();

  return (
    <S.Container source={require("../../assets/city.jpg")}>
      {!isSearching && <S.Header>BingeTime</S.Header>}
      <SearchBar
        searchResult={searchResult}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
        setFilteredEpisodeResult={setFilteredEpisodeResult}
      />
      {isSearching && searchResult?._embedded.episodes && (
        <EpisodeList
          data={
            filteredEpisodeResult
              ? filteredEpisodeResult
              : searchResult._embedded.episodes
          }
        />
      )}
    </S.Container>
  );
};

export default HomeScreen;
