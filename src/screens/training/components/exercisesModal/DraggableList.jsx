import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import DraggableFlatList, {
  OpacityDecorator,
  ShadowDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import ExerciseSingleCard from "./ExerciseSingleCard";
import ExerciseSupersetCard from "./ExerciseSupersetCard";
import { saveExercises, handleChangeExercise } from "../../../../store/slices/trainingSlice";
import { ButtonClassicLong } from "../../../../components/CustomButtons";

export default DraggableList = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { activeWorkout, numActiveExercise } = useSelector((state) => state.training);
  const [data, setData] = useState(activeWorkout.sort((a, b) => a.order - b.order));

  const saveOrder = () => {
    dispatch(saveExercises(data));
    dispatch(handleChangeExercise(numActiveExercise));
    toggleModal();
  };

  const renderItem = ({ item, drag, getIndex }) => {
    const { isActive } = useOnCellActiveAnimation();

    return (
      <OpacityDecorator activeOpacity={0.5}>
        <ShadowDecorator>
          {item?.Exercises ? (
            <ExerciseSupersetCard
              data={item}
              isActive={isActive}
              action={drag}
              index={getIndex()}
            />
          ) : (
            <ExerciseSingleCard data={item} isActive={isActive} action={drag} index={getIndex()} />
          )}
          <View style={[styles.line]} />
        </ShadowDecorator>
      </OpacityDecorator>
    );
  };

  return (
    <>
      <GestureHandlerRootView>
        <DraggableFlatList
          data={data}
          keyExtractor={(item) => item?.WorkoutExercise?.order || item?.order}
          ref={ref}
          onDragEnd={({ data }) => setData(data)}
          renderItem={renderItem}
        />
      </GestureHandlerRootView>
      <ButtonClassicLong text="Save" action={saveOrder} />
    </>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
  },
});
