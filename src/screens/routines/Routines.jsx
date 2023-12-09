import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

//HOOKS & HELPERS
import { useTranslation } from "react-i18next";
import routinesTest from "./helper/routinesTest.json";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import Header from "../../components/Header";

import SearchBar from "./components/SearchBar";
import RoutineCard from "./components/RoutineCard";
import NewRoutineModal from "./components/NewRoutineModal";
import FilterRoutineModal from "./components/FilterRoutineModal";

//MORE
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import Separator from "../../components/Separator";
import { ButtonRounded } from "../../components/CustomButtons";

export default AllRoutinesScreen = ({ route }) => {
  const { t } = useTranslation();
  const { qrQuery } = route.params || "";
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
          <ButtonRounded
            text={t("Routines.create-routine")}
            icon={"plus"}
            action={toggleNewRoutineModal}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar toggleFilterModal={toggleFilter} qrQuery={qrQuery} />
        <Separator title={"FITWAY"} />
        <View style={styles.cardsContainer}>
          {routinesTest.map((item, index) => (
            <RoutineCard data={item} key={item.id} index={index} />
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
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
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
