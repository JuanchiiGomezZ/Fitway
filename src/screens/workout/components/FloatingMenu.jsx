import React, { useState, useRef } from "react";
import { StyleSheet, Animated, TouchableHighlight, Pressable, Text } from "react-native";
import { Ionicons, MaterialIcons, Octicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import BackdropModals from "../../../components/BackdropModals";

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

const FloatingMenu = ({ setVisible }) => {
  const icon_1 = useRef(new Animated.Value(20)).current;
  const icon_2 = useRef(new Animated.Value(20)).current;
  const icon_3 = useRef(new Animated.Value(20)).current;
  const [pop, setPop] = useState(false);
  const { navigate } = useNavigation();

  const handleNavigateNewExercise = () => {
    navigate("AddExercise");
    popOut(false);
  };

  const popIn = () => {
    setPop(true);
    Animated.parallel([
      Animated.timing(icon_3, {
        toValue: 200,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(icon_2, {
        toValue: 145,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(icon_1, {
        toValue: 90,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.parallel([
      Animated.timing(icon_3, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(icon_2, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(icon_1, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <>
      {pop && <BackdropModals toggleModal={() => popOut(false)} />}
      <>
        <Animated.View style={[styles.buttonContainer, { bottom: icon_3 }]}>
          <Text style={styles.buttonLabel}>{pop && "Start training"}</Text>
          <Pressable style={[styles.circle, styles.secondCircle]}>
            <FontAwesome5 name="dumbbell" size={23} color={ORANGE_COLOR} />
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.buttonContainer, { bottom: icon_2 }]}>
          <Text style={styles.buttonLabel}>{pop && "Reorder exercises"}</Text>
          <Pressable style={[styles.circle, styles.secondCircle]}>
            <Octicons name="list-ordered" size={27} color={ORANGE_COLOR} />
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.buttonContainer, { bottom: icon_1 }]}>
          <Text style={styles.buttonLabel}>{pop && "Add exercise"}</Text>
          <Pressable
            style={[styles.circle, styles.secondCircle]}
            onPress={handleNavigateNewExercise}
          >
            <MaterialIcons name="add" size={40} color={ORANGE_COLOR} />
          </Pressable>
        </Animated.View>

        <TouchableHighlight
          style={[styles.circle, styles.mainCircle]}
          underlayColor={ORANGE_COLOR}
          onPress={() => {
            pop ? popOut() : popIn();
          }}
        >
          <Ionicons name={pop ? "close" : "menu"} size={32} color="white" />
        </TouchableHighlight>
      </>
    </>
  );
};

export default FloatingMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  circle: {
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCircle: {
    width: 60,
    height: 60,
    backgroundColor: ORANGE_COLOR,
    right: 15,
    bottom: 19,
    position: "absolute",
    zIndex: 5,
  },
  secondCircle: {
    width: 46,
    height: 46,
    backgroundColor: "white",
  },

  buttonContainer: {
    position: "absolute",
    right: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    zIndex: 5,
  },
  buttonLabel: {
    color: WHITE_COLOR,
    fontSize: 17,
    fontWeight: "500",
  },
});
