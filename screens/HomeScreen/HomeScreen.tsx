import { useState } from "react";
import * as S from "./styled";
import { Tvshow } from "../../types";
import TvShowList from "../../components/TvShowList";
import SearchBar from "./components/SearchBar";

const HomeScreen = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Tvshow | null>();

  return (
    <S.Container source={require("../../assets/city.jpg")}>
      {!isSearching && <S.Header>BingeTime</S.Header>}
      <SearchBar
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
      />
      {isSearching && searchResult?._embedded.episodes && (
        <TvShowList data={searchResult._embedded.episodes} />
      )}
    </S.Container>
  );
};

export default HomeScreen;
