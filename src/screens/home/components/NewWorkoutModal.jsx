import React, { useState } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { ClassicInput, Te } from "../../../components/Inputs";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import { useNavigation } from "@react-navigation/native";
import ModalBase from "../../../components/ModalBase";
import { ButtonClassicLong } from "../../../components/CustomButtons";

export default NewRoutineModal = () => {
  const { t } = useTranslation();
  const { newWorkout } = useWorkoutsStore();
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const { goBack } = useNavigation();

  const handleNewWorkout = () => {
    newWorkout(name).then((result) => {
      navigate("Workout", { workoutId: result.id });
    });
    goBack();
  };

  const activeButton = name.trim() < 1;

  return (
    <ModalBase title="New Workout">
      <View style={{ gap: 35, marginTop: 10 }}>
        <ClassicInput
          setInputChange={setName}
          inputChange={name}
          placeholder={t("Home.workout-name")}
          autoFocus
          autoCapitalize={"sentences"}
        />

        <ButtonClassicLong
          text={t("global.continue")}
          short
          action={handleNewWorkout}
          disabled={activeButton}
        />
      </View>
    </ModalBase>
  );
};
