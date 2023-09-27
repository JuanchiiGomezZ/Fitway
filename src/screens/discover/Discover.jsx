import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default DiscoverScreen = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Countdown"
        onPress={() => {
          navigate("Training");
        }}
      />
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
});
