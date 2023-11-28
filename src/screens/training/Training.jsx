import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

//COMPONENTS
import Loader from "../../components/Loader";
import Countdown from "./components/Countdown";
import Timer from "./components/Timer";

import ProgressBar from "./components/ProgressBar";
import ContentExercise from "./components/contentExercise/ContentExercise";
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

//STYLES
import {
  BACKGROUND_COLOR,
  GRAY_COLOR,
  GREEN_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
  WHITE_COLOR,
} from "../../styles/styles";
import useWorkoutsStore from "../../hooks/redux/useWorkoutsStore";
import ControlBar from "./components/ControlBar";
import ToolBar from "./components/ToolBar";
import useTimer from "./hooks/useTimer";

export default TrainingMode = ({ route }) => {
  const { t } = useTranslation();
  const { getWorkoutTrainingData } = useWorkoutsStore();
  const { isLoading, activeExercise } = useSelector((state) => state.training);
  const { id } = route.params;
  const timer = useTimer();

  const [countdown, setCountdown] = useState(false);
  const [bottomBar, setBottomBar] = useState(true);

  useEffect(() => {
    getWorkoutTrainingData(id);
  }, []);

  const toggleCountodwn = () => {
    setCountdown((prev) => !prev);
  };

  const toggleBottomBar = () => {
    setBottomBar((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* <HeaderTraining title={"Training"} /> */}
      {isLoading || !activeExercise ? (
        <Loader />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingBottom: 80 }}>
              <ProgressBar activeExercise={3} totalExercises={6} />
              <ContentExercise />
              {/* <ControlBar /> */}
            </View>
          </ScrollView>
          <View style={styles.bottomBar}>
            <MaterialCommunityIcons
              name="swap-vertical-bold"
              size={25}
              color={GRAY_COLOR}
              style={{
                alignSelf: "center",
                transform: [{ rotateY: !bottomBar ? "180deg" : "0deg" }],
              }}
              onPress={toggleBottomBar}
            />
            {bottomBar ? <ToolBar /> : <Timer useTimer={timer} />}
          </View>
          {countdown && <Countdown toggleModal={toggleCountodwn} restTime={30} />}
        </>
      )}
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
  bottomBar: {
    width: width,
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    gap: 2,
  },
});
