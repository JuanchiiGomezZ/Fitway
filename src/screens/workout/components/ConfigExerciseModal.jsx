import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";
import BackdropModals from "../../../components/BackdropModals";
import { OptionMenu } from "../../../components/Buttons";

export default ConfigWorkoutModal = ({ toggleBottomSheet, exerciseId }) => {
  const { t } = useTranslation();
  const { deleteWorkoutExercise } = useExercisesStore();

  const handleExercise = () => {
    deleteWorkoutExercise(exerciseId);
    toggleBottomSheet(null);
  };

  return (
    <>
      <BackdropModals toggleModal={() => toggleBottomSheet(null)} />
      <Animated.View
        style={styles.bottomSheetContainer}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <View style={styles.optionsContainer}>
          <OptionMenu text={"Edit exercise"} icon="edit-2" />

          <OptionMenu
            text={"Delete exercise"}
            icon="trash"
            color={RED_COLOR}
            action={handleExercise}
          />
        </View>
        <OptionMenu text={t("configModal.cancel")} action={() => toggleBottomSheet(null)} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: "absolute",
    bottom: 10,
    left: "5%",
    width: "100%",
    zIndex: 20,
    gap: 20,
  },
  optionsContainer: {
    gap: 8,
  },
  option: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
  },
  optionText: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
});
