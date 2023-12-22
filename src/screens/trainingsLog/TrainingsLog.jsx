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
import Empty from "./components/Empty";
import { useNavigation } from "@react-navigation/native";
import TitleScreen from "../../components/TitleScreen";

export default TrainingsLog = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const prueba = [
    { name: "Thursday", date: "20/12/2023", time: "01:25:32" },
    { name: "Tuesday", date: "18/12/2023", time: "01:16:51" },
    { name: "Friday", date: "15/12/2023", time: "01:05:17" },
  ];

  return (
    <ScreenContainer>
      <TitleScreen title={"Trainings log"} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 20 }}>
        <Calendar />
        <View style={{ gap: 10 }}>
          <View style={styles.row}>
            <Subtitle title={"Workouts"} />
            <TouchableOpacity>
              <Text style={styles.showMoreText}>Show More</Text>
            </TouchableOpacity>
          </View>
          {prueba.length == 0 ? (
            <Empty />
          ) : (
            <View style={styles.cardsContainer}>
              {prueba.map((item, index) => (
                <WorkoutLogCard index={index} key={index} data={item} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
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
