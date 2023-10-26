import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, BORDER_RADIUS } from "../../../styles/styles";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { ClassicInput } from "../../../components/Inputs";
import {
  OrangeButtonSmall,
  DisabledButtonSmall,
  CloseModalIcon,
} from "../../../components/Buttons";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import BackdropModals from "../../../components/BackdropModals";
import { useNavigation } from "@react-navigation/native";

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

  return (
    <>
      <BackdropModals toggleModal={toggleNewWorkoutModal} />

      <Animated.View style={styles.modalContainer} entering={FadeInLeft} exiting={FadeOutLeft}>
        <View style={styles.header}>
          <Text style={styles.title}>{t("Home.new-workout")}</Text>
          <CloseModalIcon action={toggleNewWorkoutModal} />
        </View>

        <ClassicInput
          setInputChange={setName}
          inputChange={name}
          placeholder={t("Home.workout-name")}
        />

        {name.trim() < 1 ? (
          <DisabledButtonSmall text={t("global.continue")} />
        ) : (
          <OrangeButtonSmall text={t("global.continue")} action={handleNewWorkout} />
        )}
      </Animated.View>
    </>
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
