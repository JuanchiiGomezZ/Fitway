import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  WHITE_COLOR,
  GREEN_COLOR,
  ORANGE_DARK_COLOR,
  BOX_COLOR,
  BACKGROUND_COLOR,
} from "../../../../styles/styles";

const TableRepsSingle = ({ reps, rest, active }) => {
  return (
    <View style={styles.table}>
      <View style={styles.head}>
        <Text style={styles.text}>Sets</Text>
        <Text style={[styles.text]}>Reps</Text>
      </View>
      {reps.map((element, index) => (
        <View style={styles.row} key={index + 10}>
          <View style={[styles.rowSet, index == active && { backgroundColor: ORANGE_DARK_COLOR }]}>
            <View style={styles.numReps}>
              <Text style={[styles.rowText]}>{index + 1}</Text>
              <Text style={styles.repsText}>{element}</Text>
            </View>

            {index < active && <AntDesign name="checkcircleo" size={28} color={GREEN_COLOR} />}
            {index == active && (
              <AntDesign name="minuscircleo" size={28} color={BACKGROUND_COLOR} />
            )}
          </View>
          {/* <View>
            {rest && (
              <View style={styles.rowRest}>
                <Text style={styles.restText}>
                  {`Rest: ${convertToMinutes(rest).slice(0, -1)}`}
                </Text>
              </View>
            )}
          </View> */}
        </View>
      ))}
    </View>
  );
};

export default TableRepsSingle;

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
  rowRest: {
    backgroundColor: "#424242",
    borderRadius: 5,
    height: 30,
    justifyContent: "center",
    paddingLeft: 10,
  },
  restText: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontWeight: "600",
  },
});
