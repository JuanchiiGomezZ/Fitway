import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import ModalBase from "../../../components/ModalBase";
import { useSelector } from "react-redux";
import { GREEN_COLOR, WHITE_COLOR } from "../../../styles/styles";
import Animated, { FadeIn, FadeOut, FadeInDown } from "react-native-reanimated";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";
import { ButtonClassicLong } from "../../../components/CustomButtons";
import SeparatingLine from "../../../components/SeparatingLine";
import { useNavigation } from "@react-navigation/native";

export default CreateSupersetModal = ({ route }) => {
  const { createSuperset } = useExercisesStore();
  const { workoutExercises } = useSelector((state) => state.workouts);
  const { exerciseId } = route.params || {};
  const { goBack } = useNavigation();

  const [selectedExercises, setSelectedExercises] = useState(new Set([exerciseId]));

  const handleAddExercise = (id) => {
    setSelectedExercises((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(id)) {
        updatedSet.delete(id);
      } else {
        updatedSet.add(id);
      }
      return updatedSet;
    });
  };

  const handleCreateSuperset = async () => {
    if (selectedExercises.size > 1) {
      await createSuperset({
        exercisesIds: [...selectedExercises],
      });
      goBack();
    }
  };

  return (
    <ModalBase title="Create superset">
      <ScrollView contentContainerStyle={{ gap: 5, height: 400 }}>
        {workoutExercises &&
          workoutExercises.map(
            (item, index) =>
              !item?.Exercises && (
                <Animated.View key={item.id} entering={FadeInDown.delay(100 * index)}>
                  <Pressable
                    style={styles.cardContainer}
                    onPress={() => handleAddExercise(item.id)}
                  >
                    {selectedExercises.has(item.id) && (
                      <Animated.View style={styles.mark} entering={FadeIn} exiting={FadeOut} />
                    )}
                    <Image
                      source={
                        item.Multimedia?.exerciseImg
                          ? { uri: item.Multimedia.exerciseImg }
                          : require("../../../assets/images/icon.png")
                      }
                      style={styles.exerciseImg}
                    />
                    <Text style={styles.exerciseText}>{item.name}</Text>
                  </Pressable>
                  <SeparatingLine />
                </Animated.View>
              ),
          )}
      </ScrollView>

      <ButtonClassicLong
        text="Confirm"
        action={handleCreateSuperset}
        disabled={selectedExercises.size <= 1}
      />
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 6,
  },
  exerciseImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  exerciseText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "500",
  },
  mark: {
    height: "100%",
    width: 5,
    backgroundColor: GREEN_COLOR,
    borderRadius: 1,
  },
});
