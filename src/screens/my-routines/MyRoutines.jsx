import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native"
//COMPONENTS
import Header from "../../components/Header";
import { TransparentButton } from "../../components/Buttons";
import RoutineCard from "./components/MyRoutineCard";
import Separator from "../../components/Separator";
import ConfigRoutineModal from "./components/ConfigRoutineModal";


//STYLES
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop, grayLightColor } from "../../styles/styles";

//OTHER
import routinesTestData from "./helpers/routinesTestData.json";


export default MyRoutinesScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [configRoutineModal, setConfigRoutineModal] = useState(false);
  const [routineId, setroutineId] = useState(null);


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
      <Header title={t("MyRoutines.title")} />
      <ScrollView>
        <View style={styles.buttonsContainer}>
          <TransparentButton text={t("MyRoutines.filter")} icon={"filter-variant-plus"} />
          <TransparentButton text={t("MyRoutines.add-routine")} icon={"plus-circle"} task={()=> navigation.navigate("AllRoutines")} />
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
