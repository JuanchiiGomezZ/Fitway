import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  BOX_COLOR,
  GRAY_COLOR,
  ORANGE_COLOR,
  ORANGE_DARK_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CircularButtonSmall } from "../../../components/Buttons";

export default HeaderTraining = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <View style={[styles.headerContainer, { marginBottom: 20, justifyContent: "space-between" }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            navigate("Home");
          }}
        >
          <FontAwesome5 name="arrow-alt-circle-left" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.headerContainer, { gap: 15 }]}>
        <CircularButtonSmall icon={"clipboard-list"} color={ORANGE_COLOR} />
        <CircularButtonSmall icon={"level-up-alt"} color={ORANGE_COLOR} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    zIndex: 3,
    marginRight: 10,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 28,
    fontWeight: "700",
  },
});
