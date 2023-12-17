import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const InformationContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-color: #4f4f4f;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #dbdbdb;
`;

export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Rating = styled.Text`
  font-size: 16px;
  color: #fcba03;
`;

export const RatingIcon = styled(Icon)`
  font-size: 20px;
  margin-right: 5px;
  color: #fcba03;
`;

export const EpisodeAndSeason = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #fcba03;
`;

export const Runtime = styled.Text`
  font-size: 14px;
  color: #dbdbdb;
`;

export const Summary = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #dbdbdb;
`;
