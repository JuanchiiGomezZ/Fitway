import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { WHITE_COLOR, BOX_COLOR, RED_COLOR, GRAY_COLOR } from "../../../styles/styles";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setReps } from "../../../store/slices/newExerciseSlice";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

const TableRow = ({ index, initialMode }) => {
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

  const handledeleteSet = () => {
    dispatch(setReps(reps.slice(0, -1)));
  };

  return (
    <Animated.View
      style={styles.row}
      key={index}
      entering={initialMode ? FadeInUp.delay(60 * index) : FadeInUp.delay(0)}
      exiting={FadeOutUp.delay(0)}
    >
      <View style={styles.numReps}>
        <Text style={[styles.rowText]}>{index + 1}</Text>
        <TextInput
          maxLength={7}
          value={numReps}
          onChangeText={handleChangeText}
          style={styles.repsInput}
          keyboardType="numeric"
          placeholder="-"
          placeholderTextColor={areValidReps ? GRAY_COLOR : RED_COLOR}
        />
      </View>
      {index + 1 == length && index + 1 != 1 && (
        <TouchableOpacity onPress={handledeleteSet}>
          <Feather name="trash-2" size={24} color="#D9D9D9" />
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
    /*     width: 80, */
    /*   backgroundColor: "red", */
  },
});
