import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BOX_COLOR } from "../../../../styles/styles";
import * as styles from "../../../../styles/tableStyles";
const TableExercise = ({ reps }) => {
  return (
    <View style={styles.table}>
      <View style={[styles.row, { justifyContent: "flex-start", gap: 20 }]}>
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>REPS</Text>
      </View>
      {reps.map((item, index) => (
        <View
          style={[styles.row, styles.rowItems, { justifyContent: "flex-start", gap: 20 }]}
          key={index}
        >
          <Text style={styles.text}>{index + 1}</Text>
          <Text style={[styles.text, styles.longItem]}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default TableExercise;
