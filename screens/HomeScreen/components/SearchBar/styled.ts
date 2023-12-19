import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { TextInput } from "react-native";

export const SearchContainer = styled.View`
  margin-top: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInputContainer = styled.TouchableOpacity`
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

export const BackButton = styled(Icon)`
  font-size: 20px;
  margin-right: 10px;
  color: #dbdbdb;
`;

export const SubmitText = styled.Text`
  margin-left: 10px;
  color: white;
`;
