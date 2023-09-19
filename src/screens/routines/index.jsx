import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import Header from "../../components/Header";
import { HomeButton } from "../../components/Buttons";
import RoutineCard from "./components/RoutineCard";
import Separator from "./components/Separator";
import ConfigRoutineModal from "./components/ConfigRoutineModal";
import NewRoutineModal from "./components/NewRoutineModal";
import { Cla } from "../../components/Buttons";

//STYLES
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop, grayLightColor } from "../../styles/styles";

//OTHER
import routinesTestData from "./helpers/routinesTestData.json";

export default RoutinesScreen = () => {
  const { t } = useTranslation();
  const [configRoutineModal, setConfigRoutineModal] = useState(false);
  const [routineId, setroutineId] = useState(null);
  const [newRoutineModal, setNewRoutineModal] = useState(false);

  const toggleBottomSheet = (id) => {
    id && setroutineId(id);
    setConfigRoutineModal(!configRoutineModal);
  };
  const toggleNewRoutineModal = () => {
    setNewRoutineModal(!newRoutineModal);
  };

  const activeRoutine = routinesTestData.find((item) => item.id == 2);

  return (
    <View style={styles.container}>
      <Header title={t("Routines.title")} />
      <ScrollView>
        <View style={styles.buttonsContainer}>
          <HomeButton text={t("Routines.filter")} icon={"filter-variant-plus"} />
          <HomeButton text={t("Routines.new-routine")} icon={"plus-circle"} task={toggleNewRoutineModal}/>
        </View>
        <View style={styles.routinesContainer}>
          <Separator title={"Active"} />
          <RoutineCard key={activeRoutine.id} data={activeRoutine} toggleBottomSheet={toggleBottomSheet} />
          <Separator title={"All"} />
          <View style={styles.allRoutines}>
            {routinesTestData.map(
              (item) => item.id != 2 && <RoutineCard key={item.id} data={item} toggleBottomSheet={toggleBottomSheet} />,
            )}
          </View>
        </View>
      </ScrollView>
      {configRoutineModal && <ConfigRoutineModal toggleBottomSheet={toggleBottomSheet} id={routineId} />}
      {newRoutineModal && <NewRoutineModal toggleNewRoutineModal={toggleNewRoutineModal} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: containerPaddingHorizontal,
    paddingTop: containerPaddingTop,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allRoutines: {
    gap: 10,
    marginBottom: 20,
  },
});
