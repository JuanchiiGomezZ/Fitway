import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//HOOKS
import { useNavigation } from "@react-navigation/native";
//COMPONENTS
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default Empty = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="arm-flex" size={80} color={ORANGE_COLOR} />
      <Text style={styles.title}>You haven´t trained this day.</Text>
      <Text style={styles.text}>Try another date.</Text>
      <TouchableOpacity style={styles.row} onPress={goBack}>
        <Entypo name="chevron-small-left" size={24} color={ORANGE_COLOR} />
        <Text style={[styles.text, { color: ORANGE_COLOR }]}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "600",
  },
  text: {
    color: GRAY_COLOR,
    textAlign: "center",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    marginTop: 8,
    gap: -5,
  },
});
