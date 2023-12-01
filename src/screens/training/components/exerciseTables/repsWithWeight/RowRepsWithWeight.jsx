import React, { useEffect, useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { useTranslation } from "react-i18next";
import { BOX_COLOR, GRAY_LIGHT_COLOR, GREEN_COLOR } from "../../../../../styles/styles";
import * as styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  updateWorkoutLog,
  updateWorkoutLogReps,
  updateWorkoutLogWeight,
} from "../../../../../store/slices/trainingSlice";
import { useDispatch, useSelector } from "react-redux";

export default RowRepsWithWeight = ({ index, data }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ reps: "", weight: "" });

  useEffect(() => {
    setInput({
      reps: workoutLog?.[numActiveExercise]?.[index]?.reps || data,
      weight: workoutLog?.[numActiveExercise]?.[index]?.weight || "0",
    });
  }, [numActiveExercise]);

  const [exerciseDone, setDone] = useState(false);
  const { numActiveExercise, workoutLog } = useSelector((state) => state.training);

  const doneCondition = workoutLog?.[numActiveExercise]?.[index]?.done;

  const handleChange = (type, value) => {
    setInput((prev) => {
      if (type === "reps") {
        dispatch(updateWorkoutLogReps({ index, reps: value, done: exerciseDone }));
        return { ...prev, reps: value };
      } else {
        dispatch(updateWorkoutLogWeight({ index, weight: value, done: exerciseDone }));
        return { ...prev, weight: value };
      }
    });
  };

  const handleDoneChange = () => {
    setDone((prev) => {
      dispatch(updateWorkoutLog({ index, reps: input.reps, weight: input.weight, done: !prev }));
      return !prev;
    });
  };
  return (
    <View
      style={[
        styles.row,
        styles.rowItems,
        { backgroundColor: doneCondition ? "rgba(3, 205, 0, 0.23)" : BOX_COLOR },
      ]}
    >
      <Text style={styles.text}>{index + 1}</Text>
      <Text style={[styles.text, styles.longItem, { fontWeight: "400", color: GRAY_LIGHT_COLOR }]}>
        {`${data}x10kg`}
      </Text>
      {/* REP */}
      <TextInput
        style={[styles.text, styles.longItem]}
        maxLength={3}
        keyboardType="numeric"
        placeholder={data}
        placeholderTextColor={GRAY_LIGHT_COLOR} //"#626262"
        cursorColor={GRAY_LIGHT_COLOR}
        inputMode="numeric"
        clearTextOnFocus={true}
        onChangeText={(value) => handleChange("reps", value)}
        defaultValue={
          doneCondition || workoutLog?.[numActiveExercise]?.[index]?.reps
            ? workoutLog?.[numActiveExercise]?.[index]?.reps
            : ""
        }
      />
      {/* WEIGHT */}
      <TextInput
        style={[styles.text]}
        maxLength={3}
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor={GRAY_LIGHT_COLOR} //"#626262"
        cursorColor={GRAY_LIGHT_COLOR}
        inputMode="numeric"
        onChangeText={(value) => handleChange("weight", value)}
        defaultValue={
          doneCondition || workoutLog?.[numActiveExercise]?.[index]?.weight
            ? workoutLog?.[numActiveExercise]?.[index]?.weight
            : ""
        }
      />

      <AntDesign
        name="checkcircleo"
        style={[
          styles.text,
          styles.tableIcon,
          { color: doneCondition ? GREEN_COLOR : GRAY_LIGHT_COLOR },
        ]}
        onPress={handleDoneChange}
      />
    </View>
  );
};
