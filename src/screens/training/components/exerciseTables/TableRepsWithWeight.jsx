import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  WHITE_COLOR,
  GREEN_COLOR,
  ORANGE_DARK_COLOR,
  BOX_COLOR,
  BACKGROUND_COLOR,
  GRAY_COLOR,
} from "../../../../styles/styles";

export default TableRepsWithWeight = ({ reps, rest, active }) => {
  return (
    <View style={styles.table}>
      <View style={styles.head}>
        <View style={styles.rowItems}>
          <Text style={styles.text}>Set</Text>
          <Text style={styles.text}>Rep</Text>
          <Text style={styles.text}>Weight</Text>
        </View>
      </View>
      {reps.map((element, index) => (
        <View
          style={[styles.row, index == active && { backgroundColor: ORANGE_DARK_COLOR }]}
          key={index}
        >
          <View style={styles.rowItems}>
            <Text style={styles.text}>{index + 1}</Text>
            <Text style={styles.text}>12 - 10</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.text, { width: "auto" }]}
                maxLength={3}
                keyboardType="numeric"
                placeholder="18"
                placeholderTextColor="#7a7a7a"
                cursorColor={WHITE_COLOR}
                inputMode="numeric"
                editable={index == active}
              />
              <Text style={[styles.text, { width: "auto" }]}>kg</Text>
            </View>
          </View>

          {index < active && <AntDesign name="checkcircleo" size={28} color={GREEN_COLOR} />}
          {index == active && <AntDesign name="minuscircleo" size={28} color={GRAY_COLOR} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    gap: 7,
    marginTop: 10,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
    width: 65,
    textAlign: "center",
  },
  inputText: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  row: {
    height: 40,
    backgroundColor: BOX_COLOR,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  numReps: {
    flexDirection: "row",
    gap: 42,
    alignItems: "center",
  },
  rowRest: {
    backgroundColor: "#424242",
    borderRadius: 5,
    height: 30,
    justifyContent: "center",
    paddingLeft: 10,
  },
  rowItems: {
    flexDirection: "row",
    gap: 15,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 3,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
  },
});
