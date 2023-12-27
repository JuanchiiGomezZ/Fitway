import React, { useState } from "react";
import { Text, View } from "react-native";
import * as styles from "../../../../../styles/tableStyles";

//HOOKS
import searchLogById from "../../../helper/searchLogById";
import { useDispatch, useSelector } from "react-redux";
import { handleLogChange } from "../../../../../store/slices/trainingSlice";
//COMPONENTS
import { AntDesign } from "@expo/vector-icons";
import RowDuration from "./RowDuration";

export default TableDuration = ({ reps, id }) => {
  const dispatch = useDispatch();
  const { workoutLog } = useSelector((state) => state.training);

  const handleChange = (index, field, value) => {
    dispatch(handleLogChange({ id, index, field, value }));
  };

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.headText, { maxWidth: 80 }]}>DURATION</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>TIMER</Text>
        <AntDesign name="check" style={[styles.text, styles.tableIcon, styles.headText]} />
      </View>
      {reps.map((item, index) => (
        <RowDuration
          index={index}
          key={index}
          rowDetail={item}
          handleChange={handleChange}
          input={searchLogById(id, workoutLog)?.stats[index]}
        />
      ))}
    </View>
  );
};
