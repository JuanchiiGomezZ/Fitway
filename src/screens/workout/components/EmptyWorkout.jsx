import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ORANGE_COLOR, ORANGE_DARK_COLOR } from "../../../styles/styles";

export default EmptyWorkout = () => {
  return (
    <View style={styles.empty}>
      <View>
        <Text style={styles.emptyText}>Your workout is empty</Text>
        <Text style={styles.emptyText}>Add exercises here</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="pluscircleo" style={styles.plusIcon} />
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  empty: {
    height: 300,
    borderColor: ORANGE_COLOR,
    borderStyle: "dotted",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#CACACA",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },

  plusIcon: {
    marginTop: 20,
    color: ORANGE_DARK_COLOR,
    fontSize: 40,
  },
});