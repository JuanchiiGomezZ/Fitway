import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ElementCard = ({ title, name, img, reverse, action, icon }) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, reverse && styles.cardContainerReverse]}
      onPress={action}
    >
      {img ? (
        <Image style={styles.image} source={{uri:img}} />
      ) : (
        <MaterialCommunityIcons name={icon} size={42} color={ORANGE_COLOR} />
      )}
      <View style={styles.descriptionContainer}>
        <Text style={[styles.textTitle, { color: WHITE_COLOR }, reverse && styles.textReverse]}>
          {title}
        </Text>
        {name && (
          <Text style={[styles.textDesc, { color: GRAY_COLOR }, reverse && styles.textReverse]}>
            {name}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 5,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  textDesc: {
    fontSize: 14,
    fontWeight: "500",
  },
  cardContainerReverse: {
    flexDirection: "row-reverse",
  },
  textReverse: {
    alignSelf: "flex-end",
  },
});
