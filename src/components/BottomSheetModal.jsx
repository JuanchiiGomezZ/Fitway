import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { BACKGROUND_COLOR, BORDER_RADIUS, WHITE_COLOR } from "../styles/styles";
import { CloseModalIcon } from "./CustomButtons";
import { useNavigation } from "@react-navigation/native";



export default BottomSheetModal = ({ children, title }) => {
  const { goBack } = useNavigation();
  return (
    <>
      <BackdropModals toggleModal={goBack} />
      <Animated.View style={styles.modalContainer} entering={SlideInDown} exiting={SlideOutDown}>
        <View style={styles.head}>
          <Text style={styles.headText}>{title}</Text>
          <CloseModalIcon action={goBack} />
        </View>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 5,
    backgroundColor: BACKGROUND_COLOR,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    paddingVertical: 15,
    paddingHorizontal:20
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
