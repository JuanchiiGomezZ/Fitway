import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { WHITE_COLOR, RED_COLOR } from "../../../styles/styles";
import BottomSheetMenu from "../../../components/BottomSheetMenu";
import { OptionMenu } from "../../../components/CustomButtons";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";
import { useNavigation } from "@react-navigation/native";

export default BottomSheetWorkout = ({ route }) => {
  const { t } = useTranslation();
  const { deleteWorkoutExercise } = useExercisesStore();
  const { exerciseId, exerciseType } = route.params;
  const { goBack, navigate } = useNavigation();

  const handleDeleteExercise = async () => {
    await deleteWorkoutExercise(exerciseId);
    goBack();
  };

  const handleOpenCreateSuperset = () => {
    navigate("CreateSupersetModal", { exerciseId });
  };

  return (
    <BottomSheetMenu>
      {exerciseType == "single" ? (
        <>
          <OptionMenu text="Create Superset" icon="plus-square" action={handleOpenCreateSuperset} />
          <OptionMenu text="Edit exercise" icon="edit-2" />
          <OptionMenu
            text="Delete exercise"
            icon="trash"
            color={RED_COLOR}
            action={handleDeleteExercise}
          />
        </>
      ) : (
        <>
          <OptionMenu text="Add to Superset" icon="plus-square" action={false} />
          <OptionMenu text="Edit Superset" icon="edit-2" action={handleOpenCreateSuperset} />
          <OptionMenu text="Delete Superset" icon="trash" color={RED_COLOR} action={false} />
        </>
      )}
    </BottomSheetMenu>
  );
};
