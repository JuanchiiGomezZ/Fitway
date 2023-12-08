import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BACKGROUND_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../styles/styles";
/* COMPONENTS */
import { CloseModalIcon } from "./Buttons";
import BackdropModals from "./BackdropModals";

/* HOOKS */
import Animated, { FadeIn, FadeOut, Layout, FadeInDown } from "react-native-reanimated";

export default ModalBase = ({ toggleModal, title, children, short }) => {
  return (
    <>
      <BackdropModals toggleModal={toggleModal} />
      <Animated.View
        style={[styles.modalContainer, short && { top: "35%", height: "auto" }]}
        entering={FadeIn}
        exiting={FadeOut}
      >
        <View style={styles.head}>
          <Text style={styles.titleModal}>{title}</Text>
          <CloseModalIcon action={toggleModal} />
        </View>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    left: "5%",
    top: "15%",
    width: "100%",
    height: "85%",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 20,
    zIndex: 4,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titleModal: {
    fontSize: 30,
    color: WHITE_COLOR,
    fontWeight: "500",
  },
});
