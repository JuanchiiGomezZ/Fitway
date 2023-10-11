import React, { useState } from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../styles/styles";
import { AntDesign,MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";
import QRCode from "react-native-qrcode-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";
import BackdropModals from "../components/BackdropModals";

export default QrModal = ({ toggleModal, code }) => {
  const width = Dimensions.get("screen").width;
  const { t } = useTranslation();

  const copyRoutineID = async () => {
    await Clipboard.setStringAsync(code);
  };

  return (
    <>
      <BackdropModals toggleModal={toggleModal} />
      <Animated.View style={styles.modalContainer} entering={FadeInRight} exiting={FadeOutRight}>
        <MaterialCommunityIcons
          style={styles.closeIcon}
          name="close-thick"
          color={GRAY_COLOR}
          size={20}
          onPress={toggleModal}
        />
        <Text style={styles.title}>Code sharer</Text>
        <Text style={styles.textSentence}>Scan it on explore screen to share the routine</Text>
        <View style={styles.qrContainer}>
          <QRCode value={code} size={width * 0.55} backgroundColor="black" color={WHITE_COLOR} />
        </View>
        <TouchableOpacity style={styles.copyContainer} onPress={copyRoutineID}>
          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>{code}</Text>
          </View>
          <View style={styles.copyBtn}>
            <AntDesign name="copy1" size={25} color="white" />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
 
  modalContainer: {
    minHeight: 200,
    width: "100%",
    position: "absolute",
    backgroundColor: BACKGROUND_COLOR,
    top: "25%",
    left: "5%",
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 20,
    zIndex: 4,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
    paddingVertical: 25,
    backgroundColor: "black",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: ORANGE_COLOR,
    width: "90%",
  },
  textSentence: {
    color: GRAY_COLOR,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  copyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  codeContainer: {
    height: 40,
    width: "68%",
    borderWidth: 1,
    borderColor: GRAY_COLOR,
    paddingRight: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: "center",
    borderRightWidth: 0,
  },
  codeText: {
    color: GRAY_COLOR,
    fontSize: 22,
    fontWeight: "500",
    marginLeft:10
  },
  copyBtn: {
    backgroundColor: ORANGE_COLOR,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 3,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});
