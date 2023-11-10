import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import Header from "../../components/Header";
import SearchBar from "./components/SearchBar";
import { OrangeButtonRounded } from "../../components/Buttons";
import Separator from "../../components/Separator";
import useExercisesStore from "../../hooks/redux/useExercisesStore";
import ExerciseCardSingle from "../workout/components/card/ExerciseCardSingle";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import { useSelector } from "react-redux";

export default AddExercise = () => {
  const { t } = useTranslation();
  const { getUserExercises } = useExercisesStore();
  const { userExercises, isLoading } = useSelector((state) => state.exercises);

  useEffect(() => {
    getUserExercises();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Header title={"Exercises"} />
        <View style={{ marginBottom: 13 }}>
          <OrangeButtonRounded text={"Create Exercise"} icon={"plus"} />
        </View>
      </View>
      <ScrollView>
        <SearchBar />
        <Separator title={"My Exercises"} />
        <View style={{ gap: 10 }}>
          {userExercises.map((item, index) => (
            <ExerciseCardSingle
              key={item.id}
              data={item}
              index={index}
            />
          ))}
        </View>
        <Separator title={"FITWAY"} />
      </ScrollView>
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
});
