import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { BACKGROUND_COLOR, BORDER_RADIUS, GRAY_COLOR, WHITE_COLOR } from "../styles/styles";
import { ButtonClassicLong } from "./CustomButtons";
import { useNavigation } from "@react-navigation/native";
import ModalBase from "./ModalBase";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

export default ConfirmationAlert = ({ route }) => {
  const { goBack } = useNavigation();
  const { title, text, confirmAction, thirdButton, thirdAction, thirdColor, thirdTitle } =
    route.params;

  return (
    <ModalBase>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.textBody}>{text}</Text>
      <View style={{ width: "100%", gap: 10, marginTop: 10 }}>
        <ButtonClassicLong text="Confirm" action={confirmAction} short />
        {thirdButton && (
          <ButtonClassicLong
            text={thirdTitle}
            action={thirdAction}
            short
            transparent
            color={thirdColor}
            borderColor={thirdColor}
          />
        )}
        <ButtonClassicLong text="Cancel" action={goBack} short transparent />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    left: "5%",
    top: "40%",
    minHeight: 80,
    width: "90%",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: BORDER_RADIUS,
    padding: 20,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  textBody: {
    color: GRAY_COLOR,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
