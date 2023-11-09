import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import ModalBase from "../../../components/ModalBase";
import { useSelector } from "react-redux";
import { GREEN_COLOR, WHITE_COLOR } from "../../../styles/styles";
import Animated, { FadeIn, FadeOut, FadeInDown } from "react-native-reanimated";
import { OrangeButton } from "../../../components/Buttons";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";

export default CreateSupersetModal = ({ exerciseId, toggleModal }) => {
  const { createSuperset } = useExercisesStore();
  const { activeWorkoutExercises } = useSelector((state) => state.workouts);

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
      await createSuperset([...selectedExercises]);
      toggleModal()
    }
  };

  return (
    <ModalBase title="Create superset" toggleModal={toggleModal}>
      <ScrollView>
        <View style={{ gap: 5 }}>
          {activeWorkoutExercises &&
            activeWorkoutExercises.exercises.map(
              (item, index) =>
                !item?.exercises && (
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
                          item.multimedia?.exerciseImg
                            ? { uri: item.multimedia.exerciseImg }
                            : require("../../../assets/images/icon.png")
                        }
                        style={styles.exerciseImg}
                      />
                      <Text style={styles.exerciseText}>{item.name}</Text>
                    </Pressable>
                    <View style={styles.line} />
                  </Animated.View>
                ),
            )}
        </View>
      </ScrollView>
      <OrangeButton text="Confirm" action={handleCreateSuperset} />
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
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
  },
});
