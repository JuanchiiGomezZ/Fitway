import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import BackdropModals from "../../../components/BackdropModals";

export default ConfigWorkoutModal = ({ toggleBottomSheet, workoutId }) => {
  const { t } = useTranslation();
  const { delteWorkout } = useWorkoutsStore();

  const handleDeleteWorkout = () => {
    delteWorkout(workoutId);
    toggleBottomSheet();
  };

  return (
    <>
      <BackdropModals toggleModal={toggleBottomSheet} />
      <Animated.View
        style={styles.bottomSheetContainer}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Feather name="edit-2" size={24} color={WHITE_COLOR} />
            <Text style={styles.optionText}>{t("configModal.edit-workout")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={handleDeleteWorkout}>
            <MaterialIcons name="delete-outline" size={26} color={RED_COLOR} />
            <Text style={[styles.optionText, { color: RED_COLOR }]}>
              {t("configModal.delete-workout")}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.option} onPress={() => toggleBottomSheet()}>
          <Text style={styles.optionText}>{t("configModal.cancel")}</Text>
        </TouchableOpacity>
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
