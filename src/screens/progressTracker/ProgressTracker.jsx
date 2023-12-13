import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import TitleScreen from "../../components/TitleScreen";
import CustomCalendar from "./components/Calendar";

export default ProgressTracker = () => {
  return (
    <ScreenContainer>
      <TitleScreen title={"Progress Tracker"} />
      <CustomCalendar />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
