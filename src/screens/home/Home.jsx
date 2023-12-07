import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";

/* HOOKS */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useRoutinesStore from "../../hooks/redux/useRoutinesStore";
import useToggle from "../../hooks/useToggle";

/* COMPONENTS */
import Weekdays from "./components/Weekdays";
import HeaderHome from "./components/HeaderHome";
import NewWorkoutModal from "./components/NewWorkoutModal";
import ContentHome from "./components/ContentHome";
import BottomSheetMenuWorkout from "./components/BottomSheetMenuWorkout";

/* STYLES */
import {
  BACKGROUND_COLOR,
  ORANGE_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
} from "../../styles/styles";
import QrModal from "../../components/QrModal";


export default HomeScreen = () => {
  const { t } = useTranslation();
  const { getUserRoutineDetail, getRoutines } = useRoutinesStore();
  const { activeRoutineId, isLoading, activeRoutineDetails } = useSelector(
    (state) => state.userRoutines,
  );
  const [configWorkoutModal, setConfigWorkoutModal] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);
  const [newWorkoutModal, toggleNewWorkoutModal] = useToggle(false);
  const [qrModal, toggleQrModal] = useToggle(false);

  const toggleBottomSheet = (id) => {
    id && setWorkoutId(id);
    setConfigWorkoutModal((prev) => !prev);
  };

  const handleRefresh = () => {
    activeRoutineId && getUserRoutineDetail(activeRoutineId);
  };

  useEffect(() => {
    getRoutines(activeRoutineId);
  }, [activeRoutineId]);

  return (
    <View style={styles.container}>
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
      {qrModal && <QrModal code={activeRoutineDetails.codeShare} toggleModal={toggleQrModal} />}
      {configWorkoutModal && (
        <BottomSheetMenuWorkout toggleBottomSheet={toggleBottomSheet} workoutId={workoutId} />
      )}
      {newWorkoutModal && <NewWorkoutModal toggleNewWorkoutModal={toggleNewWorkoutModal} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
});
