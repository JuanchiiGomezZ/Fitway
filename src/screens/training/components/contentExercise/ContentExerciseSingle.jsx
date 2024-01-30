import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ElementCard from "../../../../components/ElementCard";
import TableRepsWithWeight from "../exerciseTables/repsWithWeight/TableRepsWithWeight";
import { toggleExerciseGif } from "../../../../store/slices/trainingSlice";
import { useDispatch, useSelector } from "react-redux";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { convertToMinutes } from "../../../../helpers/timeFormater";
import TableDuration from "../exerciseTables/duration/TableDuration";
import TableRepsWithoutWeight from "../exerciseTables/repsWithoutWeight/TableRepsWithoutWeight";
import { useNavigation } from "@react-navigation/native";

export default ContentExerciseSingle = ({ data, index }) => {
  const dispatch = useDispatch();
  const { exerciseGif } = useSelector((state) => state.training);
  const {
    name,
    primaryMuscle,
    Multimedia,
    element,
    exerciseType,
    WorkoutExercises,
    SupersetExercises,
    ExerciseLogs,
  } = data || {};
  const { navigate } = useNavigation();

  const setExerciseGif = () => {
    dispatch(toggleExerciseGif(data.Multimedia?.exerciseGif));
  };

  const handleOpenBottomSheetRestTime = () => {
    navigate(
      "BottomSheetRestTimerConfig",
      index >= 0
        ? {
            actualRestTime: SupersetExercises?.[0]?.restTime,
            index: index,
          }
        : { actualRestTime: WorkoutExercises?.[0]?.restTime },
    );
  };

  const tableExerciseSelector = () => {
    switch (exerciseType) {
      case "ExerciseWithWeight":
        return (
          <TableRepsWithWeight
            reps={WorkoutExercises?.[0]?.reps || SupersetExercises?.[0]?.reps}
            rest={WorkoutExercises?.[0]?.restTime || SupersetExercises?.[0]?.restTime}
            id={data.id}
            exerciseLogs={ExerciseLogs[0]}
          />
        );
      case "ExerciseWithoutWeight":
        return (
          <TableRepsWithoutWeight
            reps={WorkoutExercises?.[0]?.reps || SupersetExercises?.[0]?.reps}
            rest={WorkoutExercises?.[0]?.restTime || SupersetExercises?.[0]?.restTime}
            id={data.id}
            exerciseLogs={ExerciseLogs[0]}
          />
        );
      case "ExerciseOfDuration":
        return (
          <TableDuration
            reps={WorkoutExercises?.[0]?.reps || SupersetExercises?.[0]?.reps}
            id={data.id}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View>
      <View style={styles.head}>
        <View>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={setExerciseGif}>
              <Image
                style={styles.image}
                source={
                  Multimedia.exerciseImg
                    ? { uri: Multimedia.exerciseImg }
                    : require("../../../../assets/images/icon_fw_orange.png")
                }
              />
              {!exerciseGif && (
                <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.bottomShadow}>
                  <FontAwesome5 name="search" size={13} color="#a1a1a1" />
                </Animated.View>
              )}
            </TouchableOpacity>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {name}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.row, styles.restTimerContainer]}
            onPress={handleOpenBottomSheetRestTime}
          >
            <MaterialCommunityIcons name="timer-outline" size={24} color={ORANGE_COLOR} />
            <Text style={styles.resTimerText}>
              Rest Timer:
              {convertToMinutes(
                WorkoutExercises?.[0]?.restTime || SupersetExercises?.[0]?.restTime,
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <ElementCard
            title="Muscle"
            name={primaryMuscle}
            img={Multimedia?.muscleImg}
            reverse
          />
          <ElementCard title="Element" name={element} img={Multimedia?.elementImg} reverse />
        </View>
      </View>
      {tableExerciseSelector()}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: WHITE_COLOR,
  },
  cardsContainer: {
    gap: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    maxWidth: "68%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bottomShadow: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: 56,
    left: 2,
    height: 20,
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  resTimerText: {
    color: ORANGE_COLOR,
    fontSize: 16,
  },
  restTimerContainer: {
    gap: 5,
    marginTop: 15,
  },
});
