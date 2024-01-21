import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, View } from "react-native";

//HOOKS & HELPERS
import { useTranslation } from "react-i18next";
import routinesTest from "./helper/routinesTest.json";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import Header from "../../components/Header";
import ScreenContainer from "../../components/ScreenContainer";
import SearchBar from "./components/SearchBar";
import RoutineCard from "./components/RoutineCard";
import NewRoutineModal from "./components/NewRoutineModal";
import FilterRoutineModal from "./components/FilterRoutineModal";
import Separator from "../../components/Separator";
import { ButtonRounded } from "../../components/CustomButtons";

export default AllRoutinesScreen = ({ route }) => {
  const { t } = useTranslation();
  const { qrQuery } = route.params || "";
  const { navigate } = useNavigation();
  const [newRoutineModal, setNewRoutineModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const toggleNewRoutineModal = () => {
    setNewRoutineModal(!newRoutineModal);
  };

  const toggleFilter = () => {
    setFilterModal(!filterModal);
  };

  const handleOpenNewRoutineModal = () => {
    navigate("NewRoutineModal");
    Keyboard.dismiss();
  };

  return (
    <ScreenContainer>
      <View style={styles.head}>
        <Header title={t("Routines.title")} />
        <View style={{ marginBottom: 13 }}>
          <ButtonRounded
            text={t("Routines.create-routine")}
            icon={"plus"}
            action={handleOpenNewRoutineModal}
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
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
