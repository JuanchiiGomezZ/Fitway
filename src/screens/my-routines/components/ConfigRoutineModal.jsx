import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import {
  BACKGROUND_COLOR,
  GREEN_COLOR,
  ORANGE_COLOR,
  RED_COLOR,
  WHITE_COLOR,
} from "../../../styles/styles";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import BackdropModals from "../../../components/BackdropModals";
import useRoutinesStore from "../../../hooks/redux/useRoutinesStore";
import { useSelector } from "react-redux";
import { OptionMenu } from "../../../components/Buttons";

export default ConfigRoutineModal = ({ toggleBottomSheet, id, toggleQrModal }) => {
  const { t } = useTranslation();
  const { deleteUserRoutine, toggleActiveRoutine } = useRoutinesStore();
  const { activeRoutineId } = useSelector((state) => state.userRoutines);
  const handleDeleteRoutine = () => {
    deleteUserRoutine(id);
    toggleBottomSheet();
  };

  const handleToggleActiveRoutine = (isActive) => {
    toggleActiveRoutine(id, isActive);
    toggleBottomSheet();
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
          {/* ACTIVE BUTTONS */}
          {id != activeRoutineId ? (
            <OptionMenu
              text={t("configModal.set-as-active")}
              icon="check-circle"
              color={GREEN_COLOR}
              action={() => handleToggleActiveRoutine(true)}
            />
          ) : (
            <OptionMenu
              text={t("configModal.remove-as-active")}
              icon="alert-circle"
              color={ORANGE_COLOR}
              action={() => handleToggleActiveRoutine(false)}
            />
          )}

          {/*SHARE BUTTON  */}
          <OptionMenu text={"Share Routine"} icon="share" action={toggleQrModal} />

          {/* EDIT BUTTON */}
          <OptionMenu text={t("configModal.edit-routine")} icon="edit-2" />

          {/* DELETE BUTTON */}
          <OptionMenu
            text={t("configModal.delete-routine")}
            icon="trash"
            color={RED_COLOR}
            action={handleDeleteRoutine}
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
    gap: 10,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
  },
  optionText: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
});
