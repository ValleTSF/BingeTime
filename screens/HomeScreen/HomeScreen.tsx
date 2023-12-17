import React, { useRef, useState } from "react";
import * as S from "./styled";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenRoutes } from "../../App";
import { ImageBackground, TextInput } from "react-native";
import { getEpisodesSingleSearch } from "../../api";
import { Tvshow } from "../../types";
import TvShowList from "../../components/TvShowList";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.HOME_SCREEN
>;

const HomeScreen = () => {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Tvshow | null>();

  const inputRef = useRef<TextInput | null>(null);

  const onIconButtonPress = () => {
    if (inputRef.current) {
      inputRef.current.blur();
      setSearchMode(false);
      setSearchResults(null);
      setInput("");
    }
  };

  const onChangeInput = (text: string) => {
    setInput(text);
    getEpisodesSingleSearch(text).then((res) => setSearchResults(res));
  };

  return (
    <S.Container source={require("../../assets/city.jpg")}>
      {!searchMode && <S.Header>BingeTime</S.Header>}
      <S.SearchContainer>
        {searchMode && (
          <S.IconButton onPress={onIconButtonPress} name="arrow-left" />
        )}
        <S.SearchBar onPress={() => inputRef.current?.focus()}>
          <S.SearchInput
            placeholder="Search BingeTime"
            placeholderTextColor="#969696"
            ref={inputRef}
            onFocus={() => setSearchMode(true)}
            value={input}
            onChangeText={onChangeInput}
          />
        </S.SearchBar>
      </S.SearchContainer>
      {searchMode && searchResults?._embedded.episodes && (
        <TvShowList data={searchResults._embedded.episodes} />
      )}
    </S.Container>
  );
};

export default HomeScreen;
