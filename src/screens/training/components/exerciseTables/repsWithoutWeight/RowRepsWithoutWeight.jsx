import React from "react";
import { Text, TextInput, View } from "react-native";
import {
  BOX_COLOR,
  GRAY_LIGHT_COLOR,
  GREEN_COLOR,
} from "../../../../../styles/styles";
import * as styles from "../../../../../styles/tableStyles";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setCountdown } from "../../../../../store/slices/trainingSlice";

//COMPONENTS

export default RowRepsWithoutWeight = ({
  index,
  exerciseReps,
  handleChange,
  input,
  exerciseLog,
  rest,
}) => {
  const dispatch = useDispatch();
  const { done, reps } = input || {};

  const toggleDone = () => {
    if (!done) {
      if (reps.length < 1) handleChange(index, "reps", exerciseReps);

      if (rest) dispatch(setCountdown({ state: true, restTime: rest }));
    } else {
      handleChange(index, "reps", "");
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
        {exerciseReps}
      </Text>

      {/* REPS */}
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

      <AntDesign
        name="checkcircleo"
        style={[styles.text, styles.tableIcon, { color: done ? GREEN_COLOR : GRAY_LIGHT_COLOR }]}
        onPress={toggleDone}
      />
    </View>
  );
};
