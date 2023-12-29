import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { WHITE_COLOR, BOX_COLOR, RED_COLOR, GRAY_COLOR } from "../../../styles/styles";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setReps } from "../../../store/slices/newExerciseSlice";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import * as tableStyles from "../../../styles/tableStyles";

const TableRow = ({ index, initialMode, exerciseType, handledeleteSet }) => {
  const dispatch = useDispatch();
  const { reps, areValidReps } = useSelector((state) => state.newExercise);
  const { length } = reps;
  const [numReps, setNumReps] = useState(reps[index] || "");

  const handleChangeText = (text) => {
    setNumReps(text);
    const updatedArrayReps = [...reps];
    updatedArrayReps[index] = text;
    dispatch(setReps(updatedArrayReps));
  };

  return (
    <Animated.View
      style={[tableStyles.row, tableStyles.rowItems, { width: "100%" }]}
      key={index}
      entering={initialMode ? FadeInUp.delay(60 * index) : FadeInUp.delay(0)}
      exiting={FadeOutUp.delay(0)}
    >
      <View style={[tableStyles.row, tableStyles.rowItems]}>
        <View style={[tableStyles.row, { justifyContent: "flex-start", gap: 20 }]}>
          <Text style={tableStyles.text}>{index + 1}</Text>
          <View style={[tableStyles.row, { justifyContent: "center", gap: 5, width: 80 }]}>
            <TextInput
              maxLength={7}
              value={numReps}
              onChangeText={handleChangeText}
              style={[tableStyles.text, { minWidth: 0 }]}
              keyboardType="numeric"
              placeholder="-"
              placeholderTextColor={areValidReps ? GRAY_COLOR : RED_COLOR}
            />
            {exerciseType == "ExerciseOfDuration" && (
              <Text style={{ color: WHITE_COLOR, fontSize: 18 }}>s</Text>
            )}
          </View>
        </View>
      </View>
      {index + 1 == length && index + 1 != 1 && (
        <TouchableOpacity onPress={handledeleteSet}>
          <Feather name="trash-2" color="#D9D9D9" style={[tableStyles.text, { fontSize: 22 }]} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    height: 45,
    backgroundColor: BOX_COLOR,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  rowText: {
    width: 40,
    textAlign: "center",
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
  numReps: {
    flexDirection: "row",
    gap: 45,
    alignItems: "center",
  },
  repsInput: {
    color: WHITE_COLOR,
    textAlign: "center",
    fontSize: 20,
    height: 45,
  },
});
