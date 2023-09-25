import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { SearchInput } from "../../../components/Inputs";
import { useNavigation } from "@react-navigation/native";

export default SearchBar = ({toggleFilterModal}) => {
  const navigation = useNavigation();
  const [querySearch, setQerySearch] = useState("");

  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons
        name="qr-code-scanner"
        size={33}
        color="white"
        onPress={() => {
          navigation.navigate("BarCodeScanner");
        }}
      />
      <SearchInput placeholder={"Search..."} inputChange={querySearch} setInputChange={setQerySearch} />
      <Entypo name="sound-mix" size={26} color="white" style={{ transform: [{ rotate: "90deg" }] }} onPress={toggleFilterModal} />
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