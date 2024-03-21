import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import * as styles from "../../../../../styles/tableStyles";
import { WHITE_COLOR } from "../../../../../styles/styles";
//COMPONENTS

export default TableExercise = ({ data }) => {
  function formatDate(prevDate) {
    const date = new Date(prevDate);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const año = date.getFullYear();

    const formattedDay = dia < 10 ? "0" + dia : dia;
    const formattedMonth = mes < 10 ? "0" + mes : mes;

    return `${formattedDay}/${formattedMonth}/${año}`;
  }
  return (
    <View>
      <Text
        style={{
          color: WHITE_COLOR,
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {formatDate(data.createdAt)}
      </Text>
      <View style={[styles.table, { marginTop: 0 }]}>
        <View style={[styles.row, { justifyContent: "flex-start", gap: 20 }]}>
          <Text style={[styles.text, styles.headText]}>SETS</Text>
          <Text style={[styles.text, styles.headText]}>REPS</Text>
          <Text style={[styles.text, styles.headText]}>KG</Text>
        </View>
        <FlatList
          data={data.stats}
          renderItem={({ item, index }) => (
            <RowReps index={index} reps={item.reps} weight={item.weight} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{ gap: 5 }}
        />
      </View>
    </View>
  );
};

const RowReps = ({ index, reps, weight }) => {
  return (
    <View style={[styles.row, styles.rowItems, { justifyContent: "flex-start", gap: 20 }]}>
      <Text style={styles.text}>{index + 1}</Text>
      <Text style={styles.text}>{reps || 0}</Text>
      <Text style={styles.text}>{weight || 0}</Text>
    </View>
  );
};
