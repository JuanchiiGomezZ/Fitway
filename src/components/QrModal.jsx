import React, { useState } from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import {
  backgroundColor,
  borderRadius,
  grayLightColor,
  orangeColor,
  whiteColor,
} from "../styles/styles";
import { AntDesign,MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import QRCode from "react-native-qrcode-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";
import BackdropModals from "../components/BackdropModals";

export default QrModal = ({ toggleModal }) => {
  const width = Dimensions.get("screen").width;
  const { t } = useTranslation();

  const copyRoutineID = async () => {
    await Clipboard.setStringAsync("asdsa");
  };

  return (
    <>
      <BackdropModals toggleModal={toggleModal} />
      <Animated.View style={styles.modalContainer} entering={FadeInLeft} exiting={FadeOutLeft}>
        <MaterialCommunityIcons
          style={styles.closeIcon}
          name="close-thick"
          color={grayLightColor}
          size={20}
          onPress={toggleModal}
        />
        <Text style={styles.title}>Code sharer</Text>
        <Text style={styles.textSentence}>Scan it on explore screen to share the routine</Text>
        <View style={styles.qrContainer}>
          <QRCode value={"asda"} size={width * 0.55} backgroundColor="black" color={whiteColor} />
        </View>
        <TouchableOpacity style={styles.copyContainer} onPress={copyRoutineID}>
          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>{"aasd"}</Text>
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
    backgroundColor: backgroundColor,
    top: "30%",
    left: "5%",
    borderRadius: borderRadius,
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 15,
    zIndex: 4,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  title: {
    color: whiteColor,
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
    borderColor: orangeColor,
    width: "90%",
  },
  textSentence: {
    color: grayLightColor,
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
    borderColor: grayLightColor,
    paddingLeft: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    borderRightWidth: 0,
  },
  codeText: {
    color: grayLightColor,
    fontSize: 22,
    fontWeight: "500",
  },
  copyBtn: {
    backgroundColor: orangeColor,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 3,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});
