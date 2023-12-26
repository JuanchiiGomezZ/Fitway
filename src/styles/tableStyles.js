import { StyleSheet } from "react-native";
import { WHITE_COLOR, BOX_COLOR, GRAY_COLOR } from "./styles";

module.exports = StyleSheet.create({
  table: {
    gap: 7,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    minWidth: 39,
  },
  rowItems: {
    height: 40,
    backgroundColor: BOX_COLOR,
    borderRadius: 5,
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
