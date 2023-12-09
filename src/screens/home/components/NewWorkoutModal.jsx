import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, BORDER_RADIUS } from "../../../styles/styles";
import { ClassicInput, Te } from "../../../components/Inputs";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import { useNavigation } from "@react-navigation/native";
import ModalBase from "../../../components/ModalBase";
import { ButtonClassicLong } from "../../../components/CustomButtons";

const heightScren = Dimensions.get("screen").height;

export default NewRoutineModal = ({ toggleNewWorkoutModal }) => {
  const { t } = useTranslation();
  const { newWorkout } = useWorkoutsStore();
  const { navigate } = useNavigation();
  const [name, setName] = useState("");

  const handleNewWorkout = () => {
    newWorkout(name).then((result) => {
      navigate("Workout", { workoutId: result.id });
    });
    toggleNewWorkoutModal();
  };

  const activeButton = name.trim() < 1;

  return (
    <ModalBase toggleModal={toggleNewWorkoutModal} title="New Workout" short={true}>
      <View style={{ gap: 20 }}>
        <ClassicInput
          setInputChange={setName}
          inputChange={name}
          placeholder={t("Home.workout-name")}
        />

        <ButtonClassicLong
          text={t("global.continue")}
          short={true}
          action={!activeButton && handleNewWorkout}
          disabled={activeButton}
        />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    position: "absolute",
    backgroundColor: BACKGROUND_COLOR,
    top: "35%",
    left: "5%",
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 15,
    zIndex: 4,
    gap: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
});
