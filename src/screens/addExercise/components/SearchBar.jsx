import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { SearchInput } from "../../../components/Inputs";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default SearchBar = () => {
  const navigation = useNavigation();
  const [querySearch, setQerySearch] = useState("");
  const { t } = useTranslation();

  return (
    <View style={styles.searchBarContainer}>
      <SearchInput
        placeholder={t("global.search") + "..."}
        inputChange={querySearch}
        setInputChange={setQerySearch}
      />
      <Entypo
        name="sound-mix"
        size={26}
        color="white"
        style={{ transform: [{ rotate: "90deg" }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
  },
});
