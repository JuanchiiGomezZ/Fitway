import { StyleSheet, Text, View, Keyboard, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { ORANGE_COLOR } from "../../../styles/styles";
import TableRow from "./TableRow";
import { useSelector, useDispatch } from "react-redux";
import { setReps } from "../../../store/slices/newExerciseSlice";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ButtonCircular } from "../../../components/CustomButtons";
import * as tableStyles from "../../../styles/tableStyles";

const { width } = Dimensions.get("screen");

export default SetsTable = ({ exerciseType }) => {
  const dispatch = useDispatch();
  const { reps } = useSelector((state) => state.newExercise);
  const { length } = reps;

  const translateY = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  const handleAddSet = () => {
    if (length <= 6) {
      dispatch(setReps([...reps, ""]));
      translateY.value = withSpring(translateY.value + 45, { damping: 7, stiffness: 80 });
    }
  };

  const handledeleteSet = () => {
    dispatch(setReps(reps.slice(0, -1)));
    translateY.value = withSpring(translateY.value - 45, { damping: 7, stiffness: 80 });
  };

  const initialMode = useRef(true);
  useEffect(() => {
    initialMode.current = false;
  }, []);

  return (
    <View style={[{ gap: 10, alignItems: "center" }]}>
      <View
        style={[
          tableStyles.row,
          { justifyContent: "flex-start", gap: 20, alignSelf: "flex-start" },
        ]}
      >
        <Text style={[tableStyles.text, tableStyles.headText]}>SETS</Text>
        <Text style={[tableStyles.text, { width: 80 }, tableStyles.headText, {}]}>
          {exerciseType != "ExerciseOfDuration" ? "REPS" : "DURATION"}
        </Text>
      </View>
      {reps.map((item, index) => (
        <TableRow
          key={index}
          index={index}
          initialMode={initialMode.current}
          exerciseType={exerciseType}
          handledeleteSet={handledeleteSet}
        />
      ))}
      {length < 6 ? (
        <Animated.View
          entering={initialMode.current ? FadeIn.delay((reps.length + 1) * 100) : FadeIn.delay(150)}
          exiting={FadeOut}
          style={[animatedStyles, { position: "absolute", top: 180 }]}
        >
          <ButtonCircular action={handleAddSet} icon="plus" size="m" />
        </Animated.View>
      ) : (
        <Animated.Text entering={FadeIn.delay(150)} exiting={FadeOut} style={styles.maxRepsText}>
          You reached the number of maximum reps.
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  maxRepsText: {
    color: ORANGE_COLOR,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
});
