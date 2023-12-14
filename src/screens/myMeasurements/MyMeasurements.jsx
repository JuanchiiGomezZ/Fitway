import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";

export default MyMeasurements = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <Text>MyMeasurements</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
