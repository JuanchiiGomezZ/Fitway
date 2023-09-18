import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { backdropColor, backgroundColor, greenColor, orangeColor, redColor, whiteColor } from "../../../styles/styles";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";

export default ConfigRoutineModal = ({ toggleBottomSheet, id }) => {
  const { t } = useTranslation();

  return (
    <>
      <Pressable style={styles.backdrop} onPress={() => toggleBottomSheet()} entering={FadeIn} exiting={FadeOut} />
      <Animated.View style={styles.bottomSheetContainer} entering={SlideInDown.damping(15)} exiting={SlideOutDown.damping(15)}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <AntDesign name="checkcircleo" size={24} color={greenColor} />
            <Text style={[styles.optionText, { color: greenColor }]}>Set as active</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Feather name="edit-2" size={24} color={whiteColor} />
            <Text style={styles.optionText}>Edit workout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="delete-outline" size={26} color={redColor} />
            <Text style={[styles.optionText, { color: redColor }]}>Delete workout</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.option} onPress={() => toggleBottomSheet()}>
          <Text style={styles.optionText}>Cancel</Text>
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
    gap: 10,
    backgroundColor: backgroundColor,
    borderRadius: 10,
  },
  optionText: {
    color: whiteColor,
    fontSize: 18,
  },
});
