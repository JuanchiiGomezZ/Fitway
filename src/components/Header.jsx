import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WHITE_COLOR } from "../styles/styles";

export default Header = ({ title, margin }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, margin !== false && { marginBottom: 20 }]}>
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
  },
  btnContainer: {
    zIndex: 3,
    marginRight: 10,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 28,
    fontWeight: "700",
  },
});
