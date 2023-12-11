import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, BackHandler } from "react-native";
import { useSelector } from "react-redux";
import ExerciseCardSingle from "./ExerciseCardSingle";
import ExerciseCardSuperset from "./ExerciseCardSuperset";
import FloatingMenu from "../FloatingMenu";
import Loader from "../../../../components/Loader";
import EmptyWorkout from "../EmptyWorkout";
import useToggle from "../../../../hooks/useToggle";
import BottomSheetMenuExercise from "../BottomSheetMenuExercise";

export default ExercisesList = ({ workoutId }) => {
  const { workoutDetails, workoutExercises, isLoading } = useSelector((state) => state.workouts);
  const { getWorkoutData } = useWorkoutsStore();

  const [configModal, setConfigModal] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);

  const [createSuperset, toggleCreateSuperset] = useToggle(false);

  useEffect(() => {
    workoutId != workoutDetails.workoutId && getWorkoutData(workoutId || workoutDetails.workoutId);
  }, []);

  const toggleConfig = (id, type) => {
    id && setExerciseId({ id, type });
    setConfigModal((prev) => !prev);
  };

  return (
    <>
      {isLoading || !workoutExercises ? (
        <Loader />
      ) : (
        <>
          {!workoutExercises[0] ? (
            <EmptyWorkout />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                {workoutExercises.map((item, index) =>
                  item?.Exercises ? (
                    <ExerciseCardSuperset
                      data={item}
                      toggleConfig={toggleConfig}
                      index={index}
                      key={item.id}
                    />
                  ) : (
                    <ExerciseCardSingle
                      data={item}
                      toggleConfig={toggleConfig}
                      index={index}
                      key={item.id}
                    />
                  ),
                )}
              </View>
            </ScrollView>
          )}
        </>
      )}
      <FloatingMenu />
      {createSuperset && (
        <CreateSupersetModal exerciseId={exerciseId.id} toggleModal={toggleCreateSuperset} />
      )}
      {configModal && (
        <BottomSheetMenuExercise
          toggleBottomSheet={toggleConfig}
          exerciseId={exerciseId}
          toggleCreateSuperset={toggleCreateSuperset}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { gap: 15, marginBottom: 100 },
});
