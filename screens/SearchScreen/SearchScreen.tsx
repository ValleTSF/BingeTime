import { View, Text } from "react-native";
import * as S from "./styled";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenRoutes } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.EPISODE_DETAILS_SCREEN
>;

const SearchScreen = ({ navigation }: Props) => {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.IconButton onPress={() => navigation.goBack()} name="arrow-left" />
        <S.SearchBar>
          <S.SearchInput />
        </S.SearchBar>
      </S.SearchContainer>
    </S.Container>
  );
};

export default SearchScreen;
