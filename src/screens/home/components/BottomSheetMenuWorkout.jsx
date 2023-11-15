import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { WHITE_COLOR, RED_COLOR, ORANGE_COLOR } from "../../../styles/styles";
import BottomSheetMenu from "../../../components/BottomSheetMenu";
import { OptionMenu } from "../../../components/Buttons";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";

export default BottomSheetMenuWorkout = ({ toggleBottomSheet, workoutId }) => {
  const { t } = useTranslation();
  const { deleteWorkout } = useWorkoutsStore();

  const handleDeleteWorkout = () => {
    deleteWorkout(workoutId);
    toggleBottomSheet();
  };

  return (
    <BottomSheetMenu toggleBottomSheet={toggleBottomSheet}>
      <OptionMenu text={t("configModal.edit-routine")} icon="edit-2" />
      <OptionMenu
        text={t("configModal.delete-routine")}
        icon="trash"
        color={RED_COLOR}
        action={handleDeleteWorkout}
      />
    </BottomSheetMenu>
  );
};
