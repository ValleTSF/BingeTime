import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Header = styled.Text`
  font-size: 52px;
  font-weight: 700;
  margin-top: 150px;
  color: #e60918;
`;

export const Container = styled.ImageBackground`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: #383838;
`;

export const SearchContainer = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.TouchableOpacity`
  display: flex;
  background-color: #5e5e5e;
  padding: 5px;
  width: 60%;
  border-radius: 10px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
`;

export const SearchInput = styled(TextInput)`
  color: #dbdbdb;
  width: 95%;
`;

export const IconButton = styled(Icon)`
  font-size: 20px;
  margin-right: 10px;
  color: #dbdbdb;
`;
