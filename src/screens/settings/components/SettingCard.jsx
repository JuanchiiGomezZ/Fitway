import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { grayLightColor, orangeColor, whiteColor } from "../../../styles/styles";

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
        <MaterialCommunityIcons size={25} color={whiteColor} name={icon} />
        <Text style={styles.cardText}>{t(title)}</Text>
      </View>
      <SimpleLineIcons name="arrow-right" style={styles.arrow} size={18} color={orangeColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderColor: grayLightColor,
    borderBottomWidth: 0.5,
  },
  mainPart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardText: {
    color: whiteColor,
    fontSize: 18,
    fontWeight: "300",
  },
});
