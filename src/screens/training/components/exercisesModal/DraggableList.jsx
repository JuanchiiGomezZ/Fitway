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

export default DraggableList = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { activeWorkoutExercises } = useSelector((state) => state.training);
  const [data, setData] = useState(activeWorkoutExercises);

  const renderItem = ({ item, drag, index }) => {
    const { isActive } = useOnCellActiveAnimation();
    return (
      <OpacityDecorator activeOpacity={0.5}>
        <ShadowDecorator>
          {item?.Exercises ? (
            <ExerciseSupersetCard data={item} isActive={isActive} />
          ) : (
            <ExerciseSingleCard data={item} isActive={isActive} action={drag} />
          )}
          <View style={styles.line} />
        </ShadowDecorator>
      </OpacityDecorator>
    );
  };

  return (
    <GestureHandlerRootView>
      <DraggableFlatList
        data={data}
        keyExtractor={(item) => item.WorkoutExercise.order}
        ref={ref}
        onDragEnd={({ data }) => setData(data)}
        renderItem={renderItem}
      />
    </GestureHandlerRootView>
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
