import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BACKGROUND_COLOR, WHITE_COLOR } from "../styles/styles";

/* COMPONENTS */
import { CloseModalIcon } from "./CustomButtons";
import BackdropModals from "./BackdropModals";
import Row from "./Row";

/* HOOKS */
import { useNavigation } from "@react-navigation/native";

export default ModalBase = ({ title, children, ...props }) => {
  const { goBack } = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BackdropModals toggleModal={goBack} />
      <View style={[styles.modalContainer, props.style]}>
        {title && (
          <Row style={{ justifyContent: "space-between" }}>
            <Text style={styles.titleModal}>{title}</Text>
            <CloseModalIcon action={goBack} />
          </Row>
        )}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "90%",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    zIndex: 5,
    maxHeight: "80%",
  },
  titleModal: {
    fontSize: 30,
    color: WHITE_COLOR,
    fontWeight: "700",
  },
});
