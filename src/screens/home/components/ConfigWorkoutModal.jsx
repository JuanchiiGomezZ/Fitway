import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { backdropColor, backgroundColor, orangeColor, redColor, whiteColor } from "../../../styles/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";

export default ConfigWorkoutModal = ({ toggleBottomSheet, workoutId }) => {
  const { t } = useTranslation();

  return (
    <>
      <Pressable style={styles.backdrop} onPress={() => toggleBottomSheet()} entering={FadeIn} exiting={FadeOut} />
      <Animated.View style={styles.bottomSheetContainer} entering={SlideInDown.damping(15)} exiting={SlideOutDown.damping(15)}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Feather name="edit-2" size={24} color={whiteColor} />
            <Text style={styles.optionText}>{t("configModal.edit-workout")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="delete-outline" size={26} color={redColor} />
            <Text style={[styles.optionText, { color: redColor }]}>{t("configModal.delete-workout")}</Text>
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
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: backdropColor,
  },
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
    backgroundColor: backgroundColor,
    borderRadius: 10,
  },
  optionText: {
    color: whiteColor,
    fontSize: 18,
  },
});
