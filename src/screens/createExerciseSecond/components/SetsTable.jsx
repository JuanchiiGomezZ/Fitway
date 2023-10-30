import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { WHITE_COLOR, BOX_COLOR, ORANGE_DARK_COLOR } from "../../../styles/styles";
import TableRow from "./TableRow";
import { OrangeButton, OrangeCircularButton } from "../../../components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { setReps } from "../../../store/slices/newExerciseSlice";

export default SetsTable = () => {
  const dispatch = useDispatch();
  const { reps } = useSelector((state) => state.newExercise);
  const { length } = reps;

  const addSet = () => {
    if (length <= 6) {
      dispatch(setReps([...reps, ""]));
    }
  };

  return (
    <View style={styles.table}>
      <View style={styles.head}>
        <Text style={styles.text}>Sets</Text>
        <Text style={[styles.text]}>Reps</Text>
      </View>
      {reps.map((item, index) => (
        <TableRow key={index} index={index} />
      ))}
      {length < 6 && <OrangeCircularButton action={addSet} icon="plus" text="Add set" />}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    gap: 10,
    alignItems: "center",
  },
  head: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 40,
    marginLeft: 5,
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
  addSetBtn: {
    backgroundColor: ORANGE_DARK_COLOR,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addSetBtnText: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontWeight: "500",
  },
});
