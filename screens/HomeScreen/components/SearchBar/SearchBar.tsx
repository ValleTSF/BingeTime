import { TextInput, TouchableOpacity } from "react-native";
import * as S from "./styled";
import { useRef, useState } from "react";
import { getEpisodesSingleSearch } from "../../../../api";
import { Episode, Tvshow } from "../../../../types";

type Props = {
  isSearching: boolean;
  setIsSearching: (searching: boolean) => void;
  setSearchResult: (result: Tvshow | null) => void;
  setFilteredEpisodeResult: (filteredEpisodes: Episode[] | null) => void;
  searchResult: Tvshow | null | undefined;
};

const SearchBar = ({
  isSearching,
  searchResult,
  setIsSearching,
  setSearchResult,
  setFilteredEpisodeResult,
}: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filtering, setFiltering] = useState<boolean>(false);

  const searchInputRef = useRef<TextInput | null>(null);

  const onBackButtonPress = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearching(false);
      setSearchResult(null);
      setSearchInput("");
    }
  };

  const onSubmit = () => {
    setFilteredEpisodeResult(null);
    getEpisodesSingleSearch(searchInput).then((res) => setSearchResult(res));
    if (searchInputRef.current) {
      searchInputRef.current.clear();
    }
    setFiltering(true);
  };

  const onChangeInput = (text: string) => {
    setSearchInput(text);
    if (filtering) {
      const filteredList = searchResult?._embedded.episodes.filter(
        (episode) =>
          episode.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          episode.summary.toLowerCase().includes(searchInput.toLowerCase())
      );
      if (filteredList) {
        setFilteredEpisodeResult(filteredList);
      }
    }
  };

  return (
    <S.SearchContainer>
      {isSearching && (
        <S.BackButton onPress={onBackButtonPress} name="arrow-left" />
      )}
      <S.SearchInputContainer onPress={() => searchInputRef.current?.focus()}>
        <S.SearchInput
          onSubmitEditing={onSubmit}
          placeholder="Search BingeTime"
          placeholderTextColor="#969696"
          ref={searchInputRef}
          onFocus={() => setIsSearching(true)}
          value={searchInput}
          onChangeText={onChangeInput}
        />
      </S.SearchInputContainer>
      <TouchableOpacity onPress={onSubmit}>
        <S.SubmitText>Enter</S.SubmitText>
      </TouchableOpacity>
    </S.SearchContainer>
  );
};

export default SearchBar;
