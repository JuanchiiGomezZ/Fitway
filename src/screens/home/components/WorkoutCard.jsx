import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BACKGROUND_COLOR, GRAY_COLOR, ORANGE_COLOR } from "../../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import CardContainer from "../../../components/CardContainer";
import { ButtonCircular } from "../../../components/CustomButtons";
import { useDispatch } from "react-redux";
import { toggleTrainingInProgressAlert } from "../../../store/slices/routinesSlice";
import { storage } from "../../../helpers/storage";

export default WorkoutCard = ({ data, toggleBottomSheet, index }) => {
  const { muscles, name, id } = data;
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handleNavigateTraining = () => {
    const storedTrainingId = storage.getString("workout_id_training");
    if (storedTrainingId) {
      dispatch(toggleTrainingInProgressAlert(id));
    } else {
      navigate("Training", { id });
    }
  };

  return (
    <CardContainer
      action={() => navigate("Workout", { workoutId: id })}
      index={index}
      configAction={() => navigate("BottomSheetMenuWorkout", { workoutId: id })}
    >
      <View style={styles.contentContainer}>
        <View style={{ width: "83%", gap: 5 }}>
          <CardContainer.Title>{name}</CardContainer.Title>
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
        <ButtonCircular
          size="l"
          icon="dumbbell"
          color={BACKGROUND_COLOR}
          iconSize={26}
          action={handleNavigateTraining}
          disabled={muscles.length < 1}
        />
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
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
    minHeight: 60,
  },
});
