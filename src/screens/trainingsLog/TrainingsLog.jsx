import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Calendar from "./components/Calendar";
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import { ORANGE_COLOR } from "../../styles/styles";
import WorkoutLogCard from "./components/WorkoutLogCard";

export default TrainingsLog = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <Header title="Trainings Log" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Calendar />
          <View style={{ gap: 10 }}>
            <View style={styles.row}>
              <Subtitle title={"Workouts"} />
              <TouchableOpacity>
                <Text style={styles.showMoreText}>Show More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
              <WorkoutLogCard index={1} />
              <WorkoutLogCard index={2} />
              <WorkoutLogCard index={3} />
              <WorkoutLogCard index={4} />
              <WorkoutLogCard index={5} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  showMoreText: {
    color: ORANGE_COLOR,
    fontSize: 16,
  },
  cardsContainer: {
    gap: 5,
    paddingBottom: 50,
  },
});
