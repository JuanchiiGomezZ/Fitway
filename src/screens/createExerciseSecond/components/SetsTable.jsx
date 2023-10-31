import { StyleSheet, Text, View, Keyboard } from "react-native";
import React, { useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { WHITE_COLOR, ORANGE_DARK_COLOR, ORANGE_COLOR } from "../../../styles/styles";
import TableRow from "./TableRow";
import { OrangeCircularButton } from "../../../components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { setReps } from "../../../store/slices/newExerciseSlice";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default SetsTable = () => {
  const dispatch = useDispatch();
  const { reps } = useSelector((state) => state.newExercise);
  const { length } = reps;

  console.log(reps);

  const addSet = () => {
    if (length <= 6) {
      dispatch(setReps([...reps, ""]));
    }
  };

  const initialMode = useRef(true);
  useEffect(() => {
    initialMode.current = false;
  }, []);

  return (
    <View style={styles.table}>
      <View style={styles.head}>
        <Text style={styles.text}>Sets</Text>
        <Text style={[styles.text]}>Reps</Text>
      </View>
      {reps.map((item, index) => (
        <TableRow key={index} index={index} initialMode={initialMode.current} />
      ))}
      {length < 6 ? (
        <Animated.View
          entering={initialMode.current ? FadeIn.delay((reps.length + 1) * 100) : FadeIn.delay(150)}
          exiting={FadeOut}
        >
          <OrangeCircularButton action={addSet} icon="plus" text="Add set" />
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
  table: {
    gap: 10,
    alignItems: "center",
  },
  head: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 35,
    marginLeft: 5,
  },
  text: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "500",
  },
  addSetBtn: {
    backgroundColor: ORANGE_DARK_COLOR,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addSetBtnText: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontWeight: "500",
  },
  maxRepsText: {
    color: ORANGE_COLOR,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
});
