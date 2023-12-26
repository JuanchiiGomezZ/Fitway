import React from "react";
import { Text, View } from "react-native";
import * as styles from "../../../../../styles/tableStyles";
import RowRepsWithoutWeight from "./RowRepsWithoutWeight";
import searchLogById from "../../../helper/searchLogById";
import { useDispatch, useSelector } from "react-redux";
import { handleLogChange } from "../../../../../store/slices/trainingSlice";
import { AntDesign } from "@expo/vector-icons";
//HOOKS

//COMPONENTS

export default TableRepsWithoutWeight = ({ reps, id, exerciseLogs, rest }) => {
  const dispatch = useDispatch();
  const { workoutLog } = useSelector((state) => state.training);

  const handleChange = (index, field, value) => {
    dispatch(handleLogChange({ id, index, field, value }));
  };
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>PREV</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>REPS</Text>
        <AntDesign name="check" style={[styles.text, styles.tableIcon, styles.headText]} />
      </View>
      {reps.map((item, index) => (
        <RowRepsWithoutWeight
          index={index}
          exerciseReps={item}
          key={index}
          input={searchLogById(id, workoutLog)?.stats[index]}
          exerciseLog={exerciseLogs?.stats?.[index]}
          rest={rest}
          handleChange={handleChange}
        />
      ))}
    </View>
  );
};
