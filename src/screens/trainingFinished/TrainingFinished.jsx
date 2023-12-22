import React, { useEffect, useState } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";

//HOOKS
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { SlideInLeft, SlideInRight } from "react-native-reanimated";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import CompletedStatCard from "./components/CompletedStatCard";

//STYLES
import { ORANGE_COLOR, WHITE_COLOR, GRAY_COLOR } from "../../styles/styles";
import { ButtonClassicLong } from "../../components/CustomButtons";

export default TrainingFinished = () => {
  const { navigate } = useNavigation();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayOfWeekNumber = today.getDay();
  const dayName = daysOfWeek[dayOfWeekNumber];
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../assets/fonts/Fugaz.ttf"),
  });

  //   useEffect(() => {
  //     const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
  //       return true;
  //     });

  //     return () => backHandler.remove();
  //   }, []);

  if (!fontsLoaded) return null;
  return (
    <ScreenContainer paddingBottom={true}>
      <View style={styles.contentContainer}>
        <Text style={styles.congrats}>CONGRATULATIONS!</Text>
        <Text style={styles.subTitle}>You completed today's workout!</Text>
        <View style={styles.statsContainer}>
          <CompletedStatCard title={dayName} enteringAnimation={SlideInLeft.delay(300)} />
          <CompletedStatCard
            title={"TOTAL TIME"}
            content={30}
            enteringAnimation={SlideInRight.delay(600)}
          />
        </View>
      </View>
      <ButtonClassicLong
        text={"Continue"}
        action={() => {
          navigate("TabNavigation", { screen: "Home" });
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  congrats: {
    color: WHITE_COLOR,
    fontSize: 30,
    fontFamily: "Fugaz",
  },
  subTitle: {
    color: ORANGE_COLOR,
    fontSize: 18,
  },
  statsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 40,
  },
});
