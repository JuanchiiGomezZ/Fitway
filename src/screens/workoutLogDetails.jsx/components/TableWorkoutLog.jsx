import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

//COMPONENTS
import { BOX_COLOR, GRAY_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Entypo } from "@expo/vector-icons";

export default TableWorkoutLog = ({ data, name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.row, { justifyContent: "space-between" }]}>
        <View style={[styles.row, { gap: 10 }]}>
          <Image
            style={styles.image}
            source={{ uri: "https://i.blogs.es/85d668/bench-press-1/650_1200.jpg" }}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Entypo name="chevron-thin-right" size={22} color={GRAY_COLOR} />
      </TouchableOpacity>

      <View style={styles.table}>
        <View style={[styles.row, styles.rowTable]}>
          <Text style={[styles.text, styles.headText]}>SETS</Text>
          <Text style={[styles.text, styles.headText, { minWidth: 120 }]}>REPS & WEIGHT</Text>
        </View>
        {data.map((element, index) => (
          <View
            style={[styles.row, styles.rowTable, index % 2 == 1 && { backgroundColor: BOX_COLOR }]}
            key={index + 10}
          >
            <Text style={styles.text}>{index + 1}</Text>
            <Text style={[styles.text, { minWidth: 120 }]}>{element}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  name: {
    color: WHITE_COLOR,
    fontSize: 21,
    fontWeight: "500",
  },
  rowTable: {
    gap: 40,
    height: 38,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    minWidth: 39,
  },
  headText: {
    color: GRAY_COLOR,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
