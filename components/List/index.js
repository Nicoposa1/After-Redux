import { StyleSheet, FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";

const List = ({ itemList, handleModal }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => <ListItem data={data} handleModal={handleModal} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
