import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import {BACKGROUND_COLOR, GREEN_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Animated, {SlideInDown, SlideOutDown } from "react-native-reanimated";
import BackdropModals from "../../../components/BackdropModals";

export default ConfigRoutineModal = ({ toggleBottomSheet, id }) => {
  const { t } = useTranslation();

  return (
    <>
      <BackdropModals toggleModal={toggleBottomSheet}/>
      <Animated.View style={styles.bottomSheetContainer} entering={SlideInDown.damping(15)} exiting={SlideOutDown.damping(15)}>
        <View style={styles.optionsContainer}>
          {id != 2 ? (
            <TouchableOpacity style={styles.option}>
              <AntDesign name="checkcircleo" size={24} color={GREEN_COLOR} />
              <Text style={[styles.optionText, { color: GREEN_COLOR }]}>{t("configModal.set-as-active")}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.option}>
              <AntDesign name="closecircleo" size={24} color={ORANGE_COLOR} />
              <Text style={[styles.optionText, { color: ORANGE_COLOR }]}>{t("configModal.remove-as-active")}</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.option}>
            <Feather name="edit-2" size={24} color={WHITE_COLOR} />
            <Text style={styles.optionText}>{t("configModal.edit-routine")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="delete-outline" size={26} color={RED_COLOR} />
            <Text style={[styles.optionText, { color: RED_COLOR }]}>{t("configModal.delete-routine")}</Text>
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
    gap: 10,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
  },
  optionText: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
});
