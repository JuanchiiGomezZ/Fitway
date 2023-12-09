import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  BOX_COLOR,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeOutLeft, Layout } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import CardContainer from "../../../components/CardContainer";

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

export default WorkoutCard = ({ data, toggleBottomSheet, index }) => {
  const { muscles, name, id } = data;
  const { navigate } = useNavigation();

  return (
    <CardContainer
      action={() => navigate("Workout", { workoutId: id })}
      index={index}
      configAction={() => toggleBottomSheet(id)}
    >
      <View style={styles.contentContainer}>
        <View style={{ width: "83%" }}>
          <Text style={styles.workoutName}>{name}</Text>
          <View style={styles.musclesContainer}>
            {muscles && muscles.length > 0 ? (
              muscles.map((item) => (
                <View style={styles.muscle} key={item}>
                  <Text style={styles.muscleName}>{item}</Text>
                </View>
              ))
            ) : (
              <Text style={[styles.muscleName, { color: GRAY_COLOR, fontWeight: "500" }]}>
                Empty
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.trainingButton} onPress={() => navigate("Training", {id})}>
          <FontAwesome5 name="dumbbell" size={22} color={BACKGROUND_COLOR} />
        </TouchableOpacity>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  workoutName: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
    width: "100%",
  },
  musclesContainer: {
    flexWrap: "wrap",
    gap: 5,
    flexDirection: "row",
    marginRight: 40,
    width: "100%",
  },
  muscle: {
    borderColor: ORANGE_COLOR,
    borderRadius: 10,
    borderWidth: 1.3,
    paddingHorizontal: 7,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  muscleName: {
    color: ORANGE_COLOR,
    fontSize: 13,
    fontWeight: "500",
  },
  trainingButton: {
    width: 45,
    height: 45,
    backgroundColor: ORANGE_COLOR,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "91%",
    minHeight: 70,
  },
});
