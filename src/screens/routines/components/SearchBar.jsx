import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { SearchInput } from "../../../components/Inputs";

export default SearchBar = () => {


  const [querySearch, setQerySearch] = useState("");
  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons name="qr-code-scanner" size={33} color="white" />
      <SearchInput placeholder={"Search..."} inputChange={querySearch} setInputChange={setQerySearch} />
      <Entypo name="sound-mix" size={26} color="white" style={{ transform: [{ rotate: "90deg" }] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
