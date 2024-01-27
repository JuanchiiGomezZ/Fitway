import React, { useState, useEffect } from "react";
import { ScrollView, RefreshControl } from "react-native";

/* HOOKS */
import {  useSelector } from "react-redux";
import useRoutinesStore from "../../hooks/redux/useRoutinesStore";
import { storage } from "../../helpers/storage";
import { useMMKVListener } from "react-native-mmkv";

/* COMPONENTS */
import ScreenContainer from "../../components/ScreenContainer";
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import ContentHome from "./components/ContentHome";
import TrainigInProgressModal from "./components/TrainigInProgressModal";

/* STYLES */
import { ORANGE_COLOR } from "../../styles/styles";


export default HomeScreen = () => {
  const { getUserRoutineDetail, getRoutines } = useRoutinesStore();
  const { activeRoutineId, isLoading } = useSelector(
    (state) => state.userRoutines,
  );


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

      {workoutIdInProgress && <TrainigInProgressModal workoutId={workoutIdInProgress} />}
    </ScreenContainer>
  );
};
