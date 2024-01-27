import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import useExercisesStore from "../../hooks/redux/useExercisesStore";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Loader from "../../components/Loader";
import ElementCard from "../../components/ElementCard";
import Header from "../../components/Header";
import { TextAreaWithLabel } from "../../components/Inputs";

//STYLES
import { WHITE_COLOR } from "../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ButtonClassicLong } from "../../components/CustomButtons";

export default AddExerciseDetails = ({ route }) => {
  const { id } = route.params;
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { getExerciseDetails } = useExercisesStore();

  const [exerciseData, setExerciseData] = useState(null);
  const { name, element, primaryMuscle, Multimedia, exerciseType, description } =
    exerciseData || {};

  useEffect(() => {
    getExerciseDetails(id).then((res) => {
      setExerciseData(res);
    });
  }, []);

  const convertExerciseType = (type) => {
    if (type == "ExerciseWithoutWeight") {
      return "Bodyweight + Reps";
    } else if (type == "ExerciseWithWeight") {
      return "Weight + Reps";
    } else if (type == "ExerciseOfDuration") {
      return "Duration + Reps";
    }
  };

  const handleNavigate = () => {
    navigate("CreateExerciseSecond", { exerciseType, id, task: "AddExercise", name });
  };

  return (
    <ScreenContainer paddingBottom={true}>
      {!exerciseData ? (
        <Loader />
      ) : (
        <>
          <Header />
          <View style={styles.contentContainer}>
            {Multimedia?.exerciseImg ? (
              <Image source={{ uri: Multimedia.exerciseImg }} style={styles.image} />
            ) : (
              <View style={[styles.image]}>
                <MaterialCommunityIcons name="image-off-outline" size={30} color="#545454" />
              </View>
            )}
            <View style={{ width: "95%", gap: 20 }}>
              <Text style={styles.exerciseName}>{name}</Text>
              <TextAreaWithLabel
                label="Description"
                inputChange={description ? description : "Empty"}
                editable={false}
              />
              <View style={styles.selectorsContainer}>
                <ElementCard img={Multimedia?.muscleImg} name={primaryMuscle} title="Muscle" />
                <ElementCard img={Multimedia?.elementImg} name={element} title="Element" />
                <ElementCard icon="human-handsup" title={convertExerciseType(exerciseType)} />
              </View>
            </View>
          </View>
          <ButtonClassicLong text="Continue" action={handleNavigate} />
        </>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#545454",
    borderRadius: 60,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  selectorsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 15,
  },
  exerciseName: {
    color: WHITE_COLOR,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});
