import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign, Feather } from "@expo/vector-icons";
import { GRAY_COLOR, ORANGE_COLOR, ORANGE_DARK_COLOR, WHITE_COLOR } from "../../../styles/styles";
import WorkoutCard from "./WorkoutCard";

export default ContentHome = ({ toggleBottomSheet }) => {
  const { activeRoutineId, isLoading, activeRoutineWorkouts } = useSelector(
    (state) => state.userRoutines,
  );

  if (isLoading || (!activeRoutineWorkouts && activeRoutineId)) return;
  if (activeRoutineId == null) {
    return (
      <View style={styles.container}>
        <Feather
          name="chevrons-up"
          size={30}
          color={ORANGE_COLOR}
          style={[styles.pointer, { right: "20%" }]}
        />
        <AntDesign name="exclamationcircleo" style={styles.plusIcon} />
        <Text style={styles.textFirts}>You don't have an active routine.</Text>
        <Text style={styles.textSecond}>Activate one so you can start using your routine.</Text>
      </View>
    );
  } else if (activeRoutineWorkouts.length < 1) {
    return (
      <View style={styles.container}>
        <Feather
          name="chevrons-up"
          size={30}
          color={ORANGE_COLOR}
          style={[styles.pointer, { left: "20%" }]}
        />
        <AntDesign name="pluscircleo" style={styles.plusIcon} />
        <Text style={styles.textFirts}>Start creating your own workouts.</Text>
        <Text style={styles.textSecond}>Save your custom workouts.</Text>
        <TouchableOpacity>
          <Text style={styles.link}>New workout</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (activeRoutineWorkouts.length > 0) {
    return (
      <View style={{ gap: 10 }}>
        {activeRoutineWorkouts.map((item, index) => (
          <WorkoutCard
            key={item.id}
            data={item}
            index={index}
            toggleBottomSheet={toggleBottomSheet}
          />
        ))}
      </View>
    );
  } else return;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 60,
  },
  plusIcon: {
    color: ORANGE_DARK_COLOR,
    fontSize: 50,
  },
  textFirts: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "500",
  },
  textSecond: {
    color: GRAY_COLOR,
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    width: 200,
  },
  link: {
    fontSize: 15,
    fontWeight: "400",
    color: ORANGE_COLOR,
  },
  pointer: {
    position: "absolute",
    top: -10,
  },
});
