import React, { useRef, useState } from "react";
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
import SeparatingLine from "../../../../components/SeparatingLine";
import { useNavigation } from "@react-navigation/native";
import ModalBase from "../../../../components/ModalBase";
import { View, StyleSheet } from "react-native";

export default DraggableExercisesList = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { trainingExercises, numActiveExercise } = useSelector((state) => state.training);
  const [data, setData] = useState(trainingExercises);
  const { goBack } = useNavigation();

  const saveOrder = () => {
    dispatch(saveExercises(data));
    dispatch(handleChangeExercise(numActiveExercise));
    goBack();
  };
  // console.log(trainingExercises[0]);
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
          <SeparatingLine />
        </ShadowDecorator>
      </OpacityDecorator>
    );
  };

  return (
    <ModalBase title="Exercises">
      <View style={styles.exercisesContainer}>
        <GestureHandlerRootView>
          <DraggableFlatList
            data={data}
            keyExtractor={(item) => {
              // item?.Order?.position;
              return item.id;
            }}
            ref={ref}
            onDragEnd={({ data }) => setData(data)}
            renderItem={renderItem}
          />
        </GestureHandlerRootView>
      </View>
      <ButtonClassicLong text="Save" action={saveOrder} />
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  exercisesContainer: {
    height: 380,
    marginTop: 10,
    marginBottom: 26,
  },
});
