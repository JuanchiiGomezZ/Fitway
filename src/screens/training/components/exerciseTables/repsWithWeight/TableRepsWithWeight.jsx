import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as styles from "./styles";
import RowRepsWithWeight from "./RowRepsWithWeight";
import { useDispatch, useSelector } from "react-redux";
import { handleLogChange } from "../../../../../store/slices/trainingSlice";
import searchLogById from "../../../helper/searchLogById";

export default TableRepsWithWeight = ({ reps, id, exerciseLogs }) => {
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    dispatch(handleLogChange({ id, index, field, value }));
  };

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>PREV</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>REPS</Text>
        <Text style={[styles.text, styles.headText, styles.longItem]}>KG</Text>
        <AntDesign name="check" style={[styles.text, styles.tableIcon, styles.headText]} />
      </View>
      {reps.map((element, index) => (
        <RowRepsWithWeight
          index={index}
          exerciseReps={element}
          key={index}
          handleChange={handleChange}
          input={searchLogById(id)?.stats[index]}
          exerciseLog={exerciseLogs?.stats?.[index]}
        />
      ))}
    </View>
  );
};
