import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import useRoutinesStore from "../../hooks/redux/useRoutinesStore";

//COMPONENTS
import Header from "../../components/Header";
import { TransparentButton } from "../../components/Buttons";
import RoutineCard from "./components/MyRoutineCard";
import Separator from "../../components/Separator";
import QrModal from "../../components/QrModal";
import BottomSheetMenuRoutine from "./components/BottomSheetMenuRoutine";

//STYLES
import {
  BACKGROUND_COLOR,
  ORANGE_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
} from "../../styles/styles";

export default MyRoutinesScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { getUserRoutines } = useRoutinesStore();
  const { userRoutines, isLoading } = useSelector((state) => state.userRoutines);
  const [configRoutineModal, setConfigRoutineModal] = useState(false);
  const [qrModal, setQrModal] = useState(false);
  const [routineId, setroutineId] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const { activeRoutine, disabledRoutines } = userRoutines;

  const toggleBottomSheet = (id, qrCode) => {
    if (id) {
      setroutineId(id);
      setQrCode(qrCode);
    }
    setConfigRoutineModal((prev) => !prev);
  };

  const toggleQrModal = () => {
    setConfigRoutineModal(false);
    setQrModal((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header title={t("MyRoutines.title")} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getUserRoutines}
            colors={[ORANGE_COLOR]}
            tintColor={ORANGE_COLOR}
          />
        }
      >
        <View style={styles.buttonsContainer}>
          <TransparentButton text={t("MyRoutines.filter")} icon={"filter-variant-plus"} />
          <TransparentButton
            text={t("MyRoutines.add-routine")}
            icon={"plus-circle"}
            action={() => navigation.navigate("AllRoutines")}
          />
        </View>
        {userRoutines.length < 1 ? (
          ""
        ) : (
          <View style={styles.routinesContainer}>
            <Separator title={t("MyRoutines.active")} />
            {activeRoutine && (
              <RoutineCard
                key={activeRoutine?.id}
                data={activeRoutine}
                toggleBottomSheet={toggleBottomSheet}
              />
            )}

            <Separator title={t("MyRoutines.all")} />
            <View style={styles.allRoutines}>
              {disabledRoutines.map((item, index) => (
                <RoutineCard
                  key={item?.id}
                  data={item}
                  toggleBottomSheet={toggleBottomSheet}
                  index={index}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      {qrModal && <QrModal toggleModal={toggleQrModal} code={qrCode} />}
      {configRoutineModal && (
        <BottomSheetMenuRoutine
          toggleBottomSheet={toggleBottomSheet}
          id={routineId}
          toggleQrModal={toggleQrModal}
        />
      )}
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allRoutines: {
    gap: 10,
    marginBottom: 20,
  },
});
