import React, { useState, useEffect } from "react";
import { ScrollView, RefreshControl, Text } from "react-native";

/* HOOKS */
import { useSelector } from "react-redux";
import useRoutinesStore from "../../hooks/redux/useRoutinesStore";
import useToggle from "../../hooks/useToggle";
import { storage } from "../../helpers/storage";
import { useMMKVListener } from "react-native-mmkv";

/* COMPONENTS */
import ScreenContainer from "../../components/ScreenContainer";
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import NewWorkoutModal from "./components/NewWorkoutModal";
import ContentHome from "./components/ContentHome";
import BottomSheetMenuWorkout from "./components/BottomSheetMenuWorkout";
import QrModal from "../../components/QrModal";
import TrainigInProgressModal from "./components/TrainigInProgressModal";

/* STYLES */
import { ORANGE_COLOR } from "../../styles/styles";

export default HomeScreen = () => {
  const { getUserRoutineDetail, getRoutines } = useRoutinesStore();
  const { activeRoutineId, isLoading, activeRoutineDetails } = useSelector(
    (state) => state.userRoutines,
  );
  const [configWorkoutModal, setConfigWorkoutModal] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);
  const [newWorkoutModal, toggleNewWorkoutModal] = useToggle(false);
  const [qrModal, toggleQrModal] = useToggle(false);
  const [trainingInProgress, setTrainingInProgress] = useState(
    storage.getString("workoutId_training"),
  );

  const toggleBottomSheet = (id) => {
    id && setWorkoutId(id);
    setConfigWorkoutModal((prev) => !prev);
  };

  useMMKVListener(() => {
    //EN REVISION UTILIZAR REDUX + STORAGE O SOLO STORAGE
    setTrainingInProgress(storage.getString("workoutId_training"));
  }, storage);

  const handleRefresh = () => {
    activeRoutineId && getUserRoutineDetail(activeRoutineId);
  };

  useEffect(() => {
    getRoutines(activeRoutineId);
  }, [activeRoutineId]);

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
        <HeaderHome toggleNewWorkoutModal={toggleNewWorkoutModal} toggleQrModal={toggleQrModal} />
        <ContentHome toggleBottomSheet={toggleBottomSheet} />
      </ScrollView>

      {trainingInProgress && <TrainigInProgressModal />}
      {qrModal && <QrModal code={activeRoutineDetails.codeShare} toggleModal={toggleQrModal} />}
      {configWorkoutModal && (
        <BottomSheetMenuWorkout toggleBottomSheet={toggleBottomSheet} workoutId={workoutId} />
      )}
      {newWorkoutModal && <NewWorkoutModal toggleNewWorkoutModal={toggleNewWorkoutModal} />}
    </ScreenContainer>
  );
};
