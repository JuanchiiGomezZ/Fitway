import React from "react";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import useRoutinesStore from "../../hooks/redux/useRoutinesStore";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import { ButtonShortIndex } from "../../components/CustomButtons";
import RoutineCard from "./components/MyRoutineCard";
import Separator from "../../components/Separator";

//STYLES
import { ORANGE_COLOR } from "../../styles/styles";
import EmptyRoutines from "./components/EmptyRoutines";

export default MyRoutinesScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { getUserRoutines } = useRoutinesStore();
  const { userRoutines, isLoading } = useSelector((state) => state.userRoutines);
  const { activeRoutine, disabledRoutines } = userRoutines;

  const emptyRoutines = disabledRoutines.length < 1 && !activeRoutine;

  return (
    <ScreenContainer>
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
          <ButtonShortIndex
            text={t("MyRoutines.filter")}
            icon={"filter-variant-plus"}
            disabled={emptyRoutines}
          />
          <ButtonShortIndex
            text={t("MyRoutines.add-routine")}
            icon={"plus-circle"}
            action={() => navigation.navigate("AllRoutines")}
          />
        </View>
        {emptyRoutines ? (
          <EmptyRoutines />
        ) : (
          <View style={styles.routinesContainer}>
            <Separator title={t("MyRoutines.active")} />
            {activeRoutine && <RoutineCard key={activeRoutine?.id} data={activeRoutine} />}

            <Separator title={t("Inactives")} />
            <View style={styles.allRoutines}>
              {disabledRoutines.map((item, index) => (
                <RoutineCard key={item?.id} data={item} index={index} />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allRoutines: {
    gap: 10,
    marginBottom: 20,
  },
});
