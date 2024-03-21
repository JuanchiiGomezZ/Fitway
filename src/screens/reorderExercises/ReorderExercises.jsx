import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";


export default ReorderExercises = () => {
  const { t } = useTranslation();


  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}></ScreenContainer>
  );
};
