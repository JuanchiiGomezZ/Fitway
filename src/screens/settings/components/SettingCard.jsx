import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default SettingCard = ({ data }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { title, icon, route } = data;

  const handlerNavigation = (route) => {
    route != "" && navigation.navigate(route);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => handlerNavigation(route)}>
      <View style={styles.mainPart}>
        <MaterialCommunityIcons size={25} color={WHITE_COLOR} name={icon} />
        <Text style={styles.cardText}>{t(title)}</Text>
      </View>
      <SimpleLineIcons name="arrow-right" style={styles.arrow} size={18} color={ORANGE_COLOR} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderColor: GRAY_COLOR,
    borderBottomWidth: 0.5,
  },
  mainPart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "300",
  },
});
