import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { WHITE_COLOR, BOX_COLOR, GRAY_LIGHT_COLOR, GRAY_COLOR } from "../../../../styles/styles";

export default TableRepsWithWeight = ({ reps, rest, active }) => {
  const [exerciseLog, setExerciseLog] = useState([]);

  const handleRepChange = (index, repValue) => {
    const updatedExerciseLog = [...exerciseLog];
    updatedExerciseLog[index] = { ...updatedExerciseLog[index], reps: repValue };
    setExerciseLog(updatedExerciseLog);
  };

 
  const handleWeightChange = (index, weightValue) => {
    const updatedExerciseLog = [...exerciseLog];
    updatedExerciseLog[index] = { ...updatedExerciseLog[index], weight: weightValue };
    setExerciseLog(updatedExerciseLog);
  };


  return (
    <View style={styles.table}>
      <View style={styles.rowItems}>
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>PREV</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>REPS</Text>
        <Text style={[styles.text, styles.headText]}>KG</Text>
        <AntDesign name="check" style={[styles.text, styles.tableIcon, styles.headText]} />
      </View>
      {reps.map((element, index) => (
        <View style={[styles.row]} key={index}>
          <Text style={styles.text}>{index + 1}</Text>
          <Text
            style={[styles.text, styles.longItem, { fontWeight: "400", color: GRAY_LIGHT_COLOR }]}
          >
            {`${element}x10kg`}
          </Text>
          {/* REP */}
          <TextInput
            style={[styles.text, styles.longItem]}
            maxLength={3}
            keyboardType="numeric"
            placeholder={element}
            placeholderTextColor={GRAY_LIGHT_COLOR} //"#626262"
            cursorColor={GRAY_LIGHT_COLOR}
            inputMode="numeric"
            onChangeText={(repValue) => handleRepChange(index, repValue)}
          />
          {/* WEIGHT */}
          <TextInput
            style={[styles.text]}
            maxLength={3}
            keyboardType="numeric"
            placeholder="10"
            placeholderTextColor={GRAY_LIGHT_COLOR} //"#626262"
            cursorColor={GRAY_LIGHT_COLOR}
            inputMode="numeric"
            onChangeText={(weightValue) => handleWeightChange(index, weightValue)}
          />

          <AntDesign
            name="checkcircleo"
            style={[styles.text, styles.tableIcon, { color: GRAY_LIGHT_COLOR }]}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    gap: 7,
    marginTop: 20,
  },
  rowItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    minWidth: 39,
  },
  row: {
    height: 40,
    backgroundColor: BOX_COLOR,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  longItem: {
    width: 62,
  },
  tableIcon: {
    fontSize: 24,
  },
  headText: {
    color: GRAY_COLOR,
  },
});

/* 
SET
{
  rep= 12
  weight: 10
}


EXERCISE LOG
{
    SET,
    date=date,
    time=1299
}


WORKOUT LOG
{
date = date,
time = time,
ExerciseLogs
} 
*/
