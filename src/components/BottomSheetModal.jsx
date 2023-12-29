import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { BACKGROUND_COLOR, BORDER_RADIUS, WHITE_COLOR } from "../styles/styles";
import { CloseModalIcon } from "./CustomButtons";

//COMPONENTS

const { width } = Dimensions.get("screen");

export default BottomSheetModal = ({ toggleModal, children, title }) => {
  return (
    <>
      <BackdropModals toggleModal={toggleModal} />
      <Animated.View style={styles.modalContainer} entering={SlideInDown} exiting={SlideOutDown}>
        <View style={styles.head}>
          <Text style={styles.headText}>{title}</Text>
          <CloseModalIcon action={toggleModal} />
        </View>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: width,
    position: "absolute",
    backgroundColor: BACKGROUND_COLOR,
    bottom: 0,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 15,
    zIndex: 5,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headText: {
    color: WHITE_COLOR,
    fontSize: 25,
    fontWeight: "700",
  },
});
