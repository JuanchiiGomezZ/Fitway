import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { GRAY_COLOR,ORANGE_COLOR, ORANGE_DARK_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";

export default FilterOptionComponent = ({ data, setState, state, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.optionName}>{title}:</Text>
      <View style={[styles.optionsContainer]}>
        {data.map((item) => (
          <TouchableHighlight
            style={[styles.option, item == state && { borderColor: ORANGE_COLOR }]}
            key={item}
            onPress={() => setState(item)}
          >
            <Text style={[styles.optionText, item == state && { color: ORANGE_COLOR }]}>{item}</Text>
          </TouchableHighlight>
        ))}
        {state != null && <AntDesign name="closecircleo" size={20} color={GRAY_COLOR} onPress={() => setState(null)} />}
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
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "600",
  },
  option: {
    borderColor: ORANGE_DARK_COLOR,
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
    color: ORANGE_DARK_COLOR,
    fontSize: 15,
    fontWeight: "500",
  },
});
