import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RED_COLOR, ORANGE_COLOR, GREEN_COLOR } from "../../../styles/styles";
import BottomSheetMenu from "../../../components/BottomSheetMenu";
import { OptionMenu } from "../../../components/CustomButtons";
import useRoutinesStore from "../../../hooks/redux/useRoutinesStore";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default BottomSheetRoutine = ({ route }) => {
  const { id, codeShare } = route.params || {};
  const { t } = useTranslation();
  const { deleteUserRoutine, toggleActiveRoutine } = useRoutinesStore();
  const { activeRoutineId } = useSelector((state) => state.userRoutines);
  const { goBack, navigate } = useNavigation();

  const handleDeleteRoutine = () => {
    deleteUserRoutine(id);
    goBack();
  };

  const handleToggleActiveRoutine = (isActive) => {
    toggleActiveRoutine(id, isActive);
    goBack();
  };

  return (
    <BottomSheetMenu>
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
      <OptionMenu
        text={"Share Routine"}
        icon="share"
        action={() => navigate("QrModal", { code: codeShare })}
      />
      <OptionMenu text={t("configModal.edit-routine")} icon="edit-2" />
      <OptionMenu
        text={t("configModal.delete-routine")}
        icon="trash"
        color={RED_COLOR}
        action={handleDeleteRoutine}
      />
    </BottomSheetMenu>
  );
};
