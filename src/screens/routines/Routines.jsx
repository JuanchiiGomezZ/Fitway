import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

//HOOKS & HELPERS
import { useTranslation } from "react-i18next";
import routinesTest from "./helper/routinesTest.json";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import Header from "../../components/Header";
import { TransparentButtonRounded } from "../../components/Buttons";
import SearchBar from "./components/SearchBar";
import RoutineCard from "./components/RoutineCard";
import NewRoutineModal from "./components/NewRoutineModal";
import FilterRoutineModal from "./components/FilterRoutineModal";

//MORE
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop } from "../../styles/styles";
import Separator from "../../components/Separator";

export default AllRoutinesScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [newRoutineModal, setNewRoutineModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const toggleNewRoutineModal = () => {
    setNewRoutineModal(!newRoutineModal);
  };

  const toggleFilter = () => {
    setFilterModal(!filterModal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Header title={t("Routines.title")} />
        <View style={{ marginBottom: 13 }}>
          <TransparentButtonRounded text={t("Routines.create-routine")} icon={"plus"} task={toggleNewRoutineModal} />
        </View>
      </View>
      <ScrollView>
        <SearchBar toggleFilterModal={toggleFilter} />
        <Separator title={"FITWAY"} />
        <View style={styles.cardsContainer}>
          {routinesTest.map((item) => (
            <RoutineCard data={item} key={item.id} />
          ))}
        </View>
      </ScrollView>

      {newRoutineModal && <NewRoutineModal toggleNewRoutineModal={toggleNewRoutineModal} />}
      {filterModal && <FilterRoutineModal toggleModal={toggleFilter} />}
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
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardsContainer: {
    gap: 10,
    marginBottom: 30,
  },
});