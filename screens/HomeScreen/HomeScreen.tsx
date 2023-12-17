import { useRef, useState } from "react";
import * as S from "./styled";
import { TextInput } from "react-native";
import { getEpisodesSingleSearch } from "../../api";
import { Tvshow } from "../../types";
import TvShowList from "../../components/TvShowList";

const HomeScreen = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Tvshow | null>();

  const searchInputRef = useRef<TextInput | null>(null);

  const onBackButtonPress = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearching(false);
      setSearchResults(null);
      setSearchInput("");
    }
  };

  const onChangeInput = (text: string) => {
    setSearchInput(text);
    getEpisodesSingleSearch(text).then((res) => setSearchResults(res));
  };

  return (
    <S.Container source={require("../../assets/city.jpg")}>
      {!isSearching && <S.Header>BingeTime</S.Header>}
      <S.SearchContainer>
        {isSearching && (
          <S.BackButton onPress={onBackButtonPress} name="arrow-left" />
        )}
        <S.SearchBar onPress={() => searchInputRef.current?.focus()}>
          <S.SearchInput
            placeholder="Search BingeTime"
            placeholderTextColor="#969696"
            ref={searchInputRef}
            onFocus={() => setIsSearching(true)}
            value={searchInput}
            onChangeText={onChangeInput}
          />
        </S.SearchBar>
      </S.SearchContainer>
      {isSearching && searchResults?._embedded.episodes && (
        <TvShowList data={searchResults._embedded.episodes} />
      )}
    </S.Container>
  );
};

export default HomeScreen;
