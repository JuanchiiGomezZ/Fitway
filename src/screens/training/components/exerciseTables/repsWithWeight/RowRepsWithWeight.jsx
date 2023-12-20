import React from "react";
import { Text, TextInput, View } from "react-native";
import { BOX_COLOR, GRAY_LIGHT_COLOR, GREEN_COLOR } from "../../../../../styles/styles";
import * as styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default RowRepsWithWeight = ({ index, exerciseReps, handleChange, input, exerciseLog }) => {
  const { done, reps, weight } = input || {};

  const toggleDone = () => {
    if (!done) {
      if (reps.length < 1) {
        handleChange(index, "reps", exerciseReps);
      }
      if (weight.length < 1) {
        handleChange(index, "weight", exerciseLog?.weight || "");
      }
    } else {
      handleChange(index, "reps", "");
      handleChange(index, "weight", "");
    }
    handleChange(index, "done", !done);
  };

  return (
    <View
      style={[
        styles.row,
        styles.rowItems,
        { backgroundColor: done ? "rgba(3, 205, 0, 0.23)" : BOX_COLOR },
      ]}
    >
      <Text style={styles.text}>{index + 1}</Text>
      <Text style={[styles.text, styles.longItem, { fontWeight: "400", color: GRAY_LIGHT_COLOR }]}>
        {exerciseLog?.weight ? `${exerciseLog.reps}x${exerciseLog?.weight}kg` : "-"}
      </Text>
      {/* REP */}
      <TextInput
        style={[styles.text, styles.longItem]}
        maxLength={3}
        keyboardType="numeric"
        inputMode="numeric"
        placeholder={exerciseReps}
        placeholderTextColor={GRAY_LIGHT_COLOR} //"#626262"
        cursorColor={GRAY_LIGHT_COLOR}
        clearTextOnFocus={true}
        onChangeText={(value) => handleChange(index, "reps", value)}
        defaultValue={done || reps ? reps : ""}
      />
      {/* WEIGHT */}
      <TextInput
        style={[styles.text, styles.longItem]}
        maxLength={3}
        keyboardType="numeric"
        placeholder={exerciseLog?.weight || " - "}
        placeholderTextColor={GRAY_LIGHT_COLOR} //"#626262"
        cursorColor={GRAY_LIGHT_COLOR}
        inputMode="numeric"
        onChangeText={(value) => handleChange(index, "weight", value)}
        defaultValue={done || weight ? weight || "-" : ""}
      />

      <AntDesign
        name="checkcircleo"
        style={[styles.text, styles.tableIcon, { color: done ? GREEN_COLOR : GRAY_LIGHT_COLOR }]}
        onPress={toggleDone}
      />
    </View>
  );
};
