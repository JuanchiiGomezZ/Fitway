import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
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
      <View style={{ gap: 20 }}>
        <ClassicInput
          setInputChange={setName}
          inputChange={name}
          placeholder={t("Home.workout-name")}
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

const styles = StyleSheet.create({
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
