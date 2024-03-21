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

  const { name, element, muscles, id, Multimedia } = data || {};

  return (
    <CardContainer index={index} action={() => navigate("AddExerciseDetails", { id })}>
      <View style={styles.row}>
        <CardContainer.CardImage img={Multimedia.exerciseImg} />
        <View style={styles.contentContainer}>
          <CardContainer.Title>{name}</CardContainer.Title>
          <View style={styles.infoContainer}>
            <View>
              <Text style={[styles.text]}>{element}</Text>
              <Text style={[styles.text, styles.muscle]}>{muscles[0]}</Text>
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
