import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RED_COLOR } from "../../../styles/styles";
import BottomSheetMenu from "../../../components/BottomSheetMenu";
import useWorkoutsStore from "../../../hooks/redux/useWorkoutsStore";
import { OptionMenu } from "../../../components/CustomButtons";
import ConfirmationAlert from "../../../components/ConfirmationAlert";
import useToggle from "../../../hooks/useToggle";
import { useNavigation } from "@react-navigation/native";

export default BottomSheetMenuWorkout = ({ route }) => {
  const { workoutId } = route.params;
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const { deleteWorkout } = useWorkoutsStore();
  const [confirmationAlert, toggleConfAlert] = useToggle(false);
  const handleDeleteWorkout = () => {
    deleteWorkout(workoutId);
    goBack();
  };

  return (
    <>
      <BottomSheetMenu>
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
          title="Are you sure?"
          text="This action will delete your workout."
          toggleModal={toggleConfAlert}
          confirmAction={handleDeleteWorkout}
        />
      )}
    </>
  );
};
