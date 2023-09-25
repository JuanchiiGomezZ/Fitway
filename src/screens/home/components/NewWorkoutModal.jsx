import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import { backdropColor, backgroundColor, borderRadius } from "../../../styles/styles";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { ClassicInput } from "../../../components/Inputs";
import { OrangeButtonSmall, DisabledButtonSmall, CloseModalIcon } from "../../../components/Buttons";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import BackdropModals from "../../../components/BackdropModals";

const heightScren = Dimensions.get("screen").height;

export default NewRoutineModal = ({ toggleNewWorkoutModal }) => {
  const { t } = useTranslation();
  const { newWorkout } = useWorkoutsStore();
  const [name, setName] = useState("");

  const handleNewWorkout = () => {
    newWorkout(name);
    toggleNewWorkoutModal();
  };

  return (
    <>
      <BackdropModals toggleModal={toggleNewWorkoutModal} />

      <Animated.View style={styles.modalContainer} entering={FadeInLeft} exiting={FadeOutLeft}>
        <View style={styles.header}>
          <Text style={styles.title}>{t("New Workout")}</Text>
          <CloseModalIcon task={toggleNewWorkoutModal} />
        </View>

        <ClassicInput setInputChange={setName} inputChange={name} placeholder={"Workout name"} />

        {name.trim() < 1 ? (
          <DisabledButtonSmall text={"Continue"} />
        ) : (
          <OrangeButtonSmall text={"Continue"} task={handleNewWorkout} />
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
 
  modalContainer: {
    width: "100%",
    position: "absolute",
    backgroundColor: backgroundColor,
    top: heightScren * 0.3,
    left: "5%",
    borderRadius: borderRadius,
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
