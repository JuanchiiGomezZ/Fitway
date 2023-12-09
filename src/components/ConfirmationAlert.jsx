import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import BackdropModals from "./BackdropModals";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { BACKGROUND_COLOR, BORDER_RADIUS, GRAY_COLOR, WHITE_COLOR } from "../styles/styles";
import { ButtonClassicLong } from "./CustomButtons";

export default ConfirmationAlert = ({ toggleModal, title, text, confirmAction }) => {
  const { t } = useTranslation();
  return (
    <>
      <BackdropModals toggleModal={toggleModal} />
      <Animated.View style={styles.modalContainer} entering={FadeIn} exiting={FadeOut}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textBody}>{text}</Text>
        <View style={{ width: "100%", gap: 10, marginTop: 10 }}>
          <ButtonClassicLong text="Confirm" action={confirmAction} short={true} />
          <ButtonClassicLong text="Cancel" action={toggleModal} short={true} transparent={true} />
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    left: "5%",
    top: "40%",
    minHeight: 80,
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: BORDER_RADIUS,
    padding: 20,
    zIndex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  textBody: {
    color: GRAY_COLOR,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    width: "80%",
  },
});
