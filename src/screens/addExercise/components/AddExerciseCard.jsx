import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";

import CardContainer from "../../../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import {
  GRAY_COLOR,
  WHITE_COLOR,
  ORANGE_DARK_COLOR,
  ORANGE_COLOR,
  BACKGROUND_COLOR,
  GREEN_COLOR,
} from "../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";

export default AddExerciseCard = ({ data, index }) => {
  const { navigate } = useNavigation();

  const { name, element, primaryMuscle, id, Multimedia } = data || {};

  return (
    <CardContainer index={index} action={() => navigate("ExerciseDetails", { id })}>
      <View style={styles.row}>
        <Image
          source={
            Multimedia?.exerciseImg
              ? { uri: Multimedia.exerciseImg }
              : require("../../../assets/images/fitwayDark.png")
          }
          style={styles.workoutImg}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.infoContainer}>
            <View>
              <Text style={[styles.text]}>{element}</Text>
              <Text style={[styles.text, styles.muscle]}>{primaryMuscle}</Text>
            </View>
          </View>
        </View>
        <AntDesign name="rightcircleo" size={30} color={WHITE_COLOR} />
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: 70,
    justifyContent: "space-between",
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "700",
    maxWidth: "65%",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  muscle: {
    color: GRAY_COLOR,
    fontWeight: "500",
    marginTop: -3,
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 14,
    fontWeight: "600",
  },
  workoutImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mark: {
    height: 70,
    width: 5,
    backgroundColor: GREEN_COLOR,
  },
});
