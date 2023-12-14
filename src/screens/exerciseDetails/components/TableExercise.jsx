import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WHITE_COLOR, BOX_COLOR } from "../../../styles/styles";

const TableExercise = ({ reps }) => {
  return (
    <View style={styles.table}>
      <View style={styles.head}>
        <Text style={styles.text}>Sets</Text>
        <Text style={[styles.text]}>Reps</Text>
      </View>
      {reps.map((element, index) => (
        <View style={styles.row} key={index + 10}>
          <View style={[styles.rowSet]}>
            <View style={styles.numReps}>
              <Text style={[styles.rowText]}>{index + 1}</Text>
              <Text style={styles.repsText}>{element}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TableExercise;

const styles = StyleSheet.create({
  table: {
    gap: 7,
  },
  head: {
    flexDirection: "row",
    gap: 40,
    marginLeft: 5,
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
  row: {
    gap: 5,
  },
  rowSet: {
    height: 40,
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
    gap: 42,
    alignItems: "center",
  },
  repsText: {
    width: 40,
    textAlign: "center",
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
});
