import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Episode } from "../../types";

export const EpisodeContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #e0e0e0;
`;

export const EpisodeInformationContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const EpisodeTitle = styled.Text`
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
`;
