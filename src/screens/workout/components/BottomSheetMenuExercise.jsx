import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { WHITE_COLOR, RED_COLOR, ORANGE_COLOR } from "../../../styles/styles";
import BottomSheetMenu from "../../../components/BottomSheetMenu";
import { OptionMenu } from "../../../components/Buttons";
import useExercisesStore from "../../../hooks/redux/useExercisesStore";

export default BottomSheetMenuWorkout = ({
  toggleBottomSheet,
  exerciseId,
  toggleCreateSuperset,
}) => {
  const { t } = useTranslation();
  const { deleteWorkoutExercise } = useExercisesStore();

  const handleExercise = () => {
    deleteWorkoutExercise(exerciseId.id);
    toggleBottomSheet(null);
  };

  const handleOpenCreateSuperset = () => {
    toggleCreateSuperset();
    toggleBottomSheet(null);
  };

  return (
    <BottomSheetMenu toggleBottomSheet={toggleBottomSheet}>
      <OptionMenu text="Add to Superset" icon="plus-square" action={handleOpenCreateSuperset} />
      <OptionMenu text="Edit exercise" icon="edit-2" />
      <OptionMenu text="Delete exercise" icon="trash" color={RED_COLOR} action={handleExercise} />
    </BottomSheetMenu>
  );
};
