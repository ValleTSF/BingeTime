import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: #383838;
`;

export const SearchContainer = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.TouchableOpacity`
  margin-top: 50px;
  display: flex;
  background-color: #5e5e5e;
  padding: 5px;
  width: 60%;
  border-radius: 10px;
  height: 30px;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  color: #dbdbdb;
  width: 100%;
`;

export const IconButton = styled(Icon)`
  font-size: 20px;
  background-color: azure;
`;
