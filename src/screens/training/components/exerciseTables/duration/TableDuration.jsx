import React, { useState } from "react";
import { Text, View } from "react-native";
import * as styles from "../../../../../styles/tableStyles";

//HOOKS

//COMPONENTS
import { AntDesign } from "@expo/vector-icons";
import RowDuration from "./RowDuration";

export default TableDuration = () => {
  const times = [10, 45, 90];

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        {/* <View style={[styles.row, { justifyContent: "flex-start", gap: 20 }]}> */}
        <Text style={[styles.text, styles.headText]}>SETS</Text>
        <Text style={[styles.text, styles.headText, { maxWidth: 80 }]}>DURATION</Text>
        <Text style={[styles.text, styles.longItem, styles.headText]}>TIMER</Text>
        {/* </View> */}
        <AntDesign name="check" style={[styles.text, styles.tableIcon, styles.headText]} />
      </View>
      {times.map((item, index) => (
        <RowDuration index={index} key={index} rowDetail={item} />
      ))}
    </View>
  );
};
