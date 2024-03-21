import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { GRAY_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RequiredErrorIcon } from "./RequiredError";
import Row from "./Row";

export default ElementCard = ({ title, name, img, reverse, action, icon, isValid }) => {
  return (
    <View style={styles.elementContainer}>
      <TouchableOpacity
        style={[styles.cardContainer, reverse && styles.cardContainerReverse]}
        onPress={action}
      >
        {img ? (
          <Image style={styles.image} source={{ uri: img }} />
        ) : (
          <MaterialCommunityIcons name={icon} size={42} color={ORANGE_COLOR} />
        )}
        <View style={styles.descriptionContainer}>
          <View style={[styles.cardContainer, reverse && styles.cardContainerReverse]}>
            <Text
              style={[
                styles.textTitle,
                { color: isValid ? RED_COLOR : WHITE_COLOR },
                reverse && styles.textReverse,
              ]}
            >
              {title}
            </Text>
            {isValid && <RequiredErrorIcon />}
          </View>
          {name && (
            <Text style={[styles.textDesc, { color: GRAY_COLOR }, reverse && styles.textReverse]}>
              {name}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
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
    gap: 4,
    maxWidth: 115,
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
