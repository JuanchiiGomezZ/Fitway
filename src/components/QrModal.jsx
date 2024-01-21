import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";
import ModalBase from "./ModalBase";

export default QrModal = ({ route }) => {
  const width = Dimensions.get("screen").width;
  const { code } = route.params;
  const copyRoutineID = async () => {
    await Clipboard.setStringAsync(code);
  };

  return (
    <ModalBase title={"Code share"}>
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
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    alignSelf:'center',
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
    marginLeft: 10,
  },
  copyBtn: {
    backgroundColor: ORANGE_COLOR,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 3,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    position:'relative',
    left:-3
  },
});
