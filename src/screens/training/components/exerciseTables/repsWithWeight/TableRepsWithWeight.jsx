import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GRAY_LIGHT_COLOR } from "../../../../../styles/styles";
import * as styles from "./styles";
import RowRepsWithWeight from "./RowRepsWithWeight";

export default TableRepsWithWeight = ({ reps, rest, active }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>PREV</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>REPS</Text>
        <Text style={[styles.text, styles.headText]}>KG</Text>
        <AntDesign name="check" style={[styles.text, styles.tableIcon, styles.headText]} />
      </View>
      {reps.map((element, index) => (
        <RowRepsWithWeight index={index} data={element} key={index}/>
      ))}
    </View>
  );
};
