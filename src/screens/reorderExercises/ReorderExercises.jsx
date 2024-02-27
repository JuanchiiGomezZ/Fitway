import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import useActiveColors from "../../hooks/useActiveColor";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import { ThemeContext } from "../../Context/ThemeContext";

export default ReorderExercises = () => {
  const { t } = useTranslation();
  const activeColors = useActiveColors();
  const { theme, updateTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(theme.mode === "dark");

  const handleSwtich = () => {
    updateTheme();
    setIsActive((prev) => !prev);
  };

  return (
    <ScreenContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: activeColors.text }}>Dark Mode: </Text>
      <Switch value={isActive} onValueChange={handleSwtich} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
