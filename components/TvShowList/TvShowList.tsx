import React from "react";
import { Episode } from "../../types";
import TvShowItem from "./TvShowItem";
import { FlatList } from "react-native";

type Props = {
  data: Episode[];
};

const TvShowList = ({ data }: Props) => {
  return (
    <FlatList
      style={{ width: "100%", marginTop: 10 }}
      renderItem={({ item }) => <TvShowItem episode={item} />}
      data={data}
    ></FlatList>
  );
};

export default TvShowList;
