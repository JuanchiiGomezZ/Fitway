import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { WHITE_COLOR, RED_COLOR, ORANGE_COLOR } from "../../../styles/styles";
import BottomSheetMenu from "../../../components/BottomSheetMenu";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import { OptionMenu } from "../../../components/Buttons";
import ConfirmationAlert from "../../../components/ConfirmationAlert";
import useToggle from "../../../hooks/useToggle";

export default BottomSheetMenuWorkout = ({ toggleBottomSheet, workoutId }) => {
  const { t } = useTranslation();
  const { deleteWorkout } = useWorkoutsStore();
  const [confirmationAlert, toggleConfAlert] = useToggle(false);
  const handleDeleteWorkout = () => {
    deleteWorkout(workoutId);
    toggleBottomSheet();
  };

  return (
    <>
      <BottomSheetMenu toggleBottomSheet={toggleBottomSheet}>
        <OptionMenu text={t("configModal.edit-routine")} icon="edit-2" />
        <OptionMenu
          text={t("configModal.delete-routine")}
          icon="trash"
          color={RED_COLOR}
          action={toggleConfAlert}
        />
      </BottomSheetMenu>
      {confirmationAlert && (
        <ConfirmationAlert
          title="Alert"
          text="Are you sure you want to delete this workout?"
          toggleModal={toggleConfAlert}
          confirmAction={handleDeleteWorkout}
        />
      )}
    </>
  );
};
