import React from "react";
import { Episode } from "../../../../types";
import EpisodeListItem from "./EpisodeListItem";
import { FlatList } from "react-native";

type Props = {
  data: Episode[];
};

const EpisodeList = ({ data }: Props) => {
  return (
    <FlatList
      style={{ width: "100%", marginTop: 10 }}
      renderItem={({ item }) => <EpisodeListItem episode={item} />}
      data={data}
    ></FlatList>
  );
};

export default EpisodeList;
