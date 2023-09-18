import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { grayLightColor, whiteColor } from "../styles/styles";

export default Header = ({ title }) => {

  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-alt-circle-left" size={32} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  btnContainer: {
    zIndex: 3,
    marginRight: 10,
  },
  title: {
    color: whiteColor,
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    color: grayLightColor,
    fontSize: 14,
    fontWeight: "700",
    marginTop: -5,
  },
});
