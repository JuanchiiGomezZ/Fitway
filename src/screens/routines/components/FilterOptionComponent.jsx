import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { grayLightColor, orangeColor, orangeDarkColor, whiteColor } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";

export default FilterOptionComponent = ({ data, setState, state, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.optionName}>{title}:</Text>
      <View style={[styles.optionsContainer]}>
        {data.map((item) => (
          <TouchableHighlight
            style={[styles.option, item == state && { borderColor: orangeColor }]}
            key={item}
            onPress={() => setState(item)}
          >
            <Text style={[styles.optionText, item == state && { color: orangeColor }]}>{item}</Text>
          </TouchableHighlight>
        ))}
        {state != null && <AntDesign name="closecircleo" size={20} color={grayLightColor} onPress={() => setState(null)} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 5,
  },
  optionName: {
    color: whiteColor,
    fontSize: 20,
    fontWeight: "600",
  },
  option: {
    borderColor: orangeDarkColor,
    borderWidth: 1.3,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  optionText: {
    color: orangeDarkColor,
    fontSize: 15,
    fontWeight: "500",
  },
});
