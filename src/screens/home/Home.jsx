import React, { useState, useEffect } from "react";
import { ScrollView, RefreshControl, Text } from "react-native";

/* HOOKS */
import { useDispatch, useSelector } from "react-redux";
import useRoutinesStore from "../../hooks/redux/useRoutinesStore";
import useToggle from "../../hooks/useToggle";
import { storage } from "../../helpers/storage";
import { useMMKVListener } from "react-native-mmkv";
import { toggleTrainingInProgressAlert } from "../../store/slices/routinesSlice";
import { useNavigation } from "@react-navigation/native";

/* COMPONENTS */
import ScreenContainer from "../../components/ScreenContainer";
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import ContentHome from "./components/ContentHome";
import TrainigInProgressModal from "./components/TrainigInProgressModal";
import ConfirmationAlert from "../../components/ConfirmationAlert";

/* STYLES */
import { ORANGE_COLOR } from "../../styles/styles";
import { cleanWorkoutLog } from "../../store/slices/trainingSlice";

export default HomeScreen = () => {
  const { getUserRoutineDetail, getRoutines } = useRoutinesStore();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { activeRoutineId, isLoading, trainingInProgressAlert } = useSelector(
    (state) => state.userRoutines,
  );

  const [discardTrainingAlert, toggleDiscardTrainingAlert] = useToggle(false);

  const [workoutIdInProgress, setWorkoutIdInProgress] = useState(
    storage.getString("workout_id_training"),
  );

  useMMKVListener(() => {
    //EN REVISION UTILIZAR REDUX + STORAGE O SOLO STORAGE
    setWorkoutIdInProgress(storage.getString("workout_id_training"));
  }, storage);

  const handleRefresh = () => {
    activeRoutineId && getUserRoutineDetail(activeRoutineId);
  };

  useEffect(() => {
    getRoutines(activeRoutineId);
  }, [activeRoutineId]);

  const handleDiscardTraining = () => {
    dispatch(cleanWorkoutLog());
    toggleDiscardTrainingAlert();
  };

  const handleTrainingInProgressAlert = () => {
    dispatch(toggleTrainingInProgressAlert());
    dispatch(cleanWorkoutLog());
    navigate("Training", { id: trainingInProgressAlert.workoutId });
  };

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleRefresh}
            colors={[ORANGE_COLOR]}
            tintColor={ORANGE_COLOR}
          />
        }
      >
        <Weekdays />
        <HeaderHome />
        <ContentHome />
      </ScrollView>

      {discardTrainingAlert && (
        <ConfirmationAlert
          toggleModal={toggleDiscardTrainingAlert}
          title="Are you sure"
          text={"This action will discard your training."}
          confirmAction={handleDiscardTraining}
        />
      )}
      {workoutIdInProgress && (
        <TrainigInProgressModal
          workoutId={workoutIdInProgress}
          toggleDiscardTrainingAlert={toggleDiscardTrainingAlert}
        />
      )}
      {trainingInProgressAlert.state && (
        <ConfirmationAlert
          toggleModal={() => dispatch(toggleTrainingInProgressAlert())}
          title="Are you sure?"
          text={
            "You have another training in progress. This action will discard your training and start a new one."
          }
          confirmAction={handleTrainingInProgressAlert}
        />
      )}
    </ScreenContainer>
  );
};
