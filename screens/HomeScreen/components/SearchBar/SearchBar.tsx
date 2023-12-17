import { TextInput } from "react-native";
import * as S from "./styled";
import { useRef, useState } from "react";
import { getEpisodesSingleSearch } from "../../../../api";
import { Tvshow } from "../../../../types";

type Props = {
  isSearching: boolean;
  setIsSearching: (searching: boolean) => void;
  setSearchResult: (result: Tvshow | null) => void;
};

const SearchBar = ({ isSearching, setIsSearching, setSearchResult }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const searchInputRef = useRef<TextInput | null>(null);

  const onBackButtonPress = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearching(false);
      setSearchResult(null);
      setSearchInput("");
    }
  };

  const onChangeInput = (text: string) => {
    setSearchInput(text);
    getEpisodesSingleSearch(text).then((res) => setSearchResult(res));
  };

  return (
    <S.SearchContainer>
      {isSearching && (
        <S.BackButton onPress={onBackButtonPress} name="arrow-left" />
      )}
      <S.SearchInputContainer onPress={() => searchInputRef.current?.focus()}>
        <S.SearchInput
          placeholder="Search BingeTime"
          placeholderTextColor="#969696"
          ref={searchInputRef}
          onFocus={() => setIsSearching(true)}
          value={searchInput}
          onChangeText={onChangeInput}
        />
      </S.SearchInputContainer>
    </S.SearchContainer>
  );
};

export default SearchBar;
