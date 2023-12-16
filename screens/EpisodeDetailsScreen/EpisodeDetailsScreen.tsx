import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenRoutes } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.EPISODE_DETAILS_SCREEN
>;

const EpisodeDetailsScreen = ({ route }: Props) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Hello EpisodeDetailsScreen {id}</Text>
    </View>
  );
};

export default EpisodeDetailsScreen;
