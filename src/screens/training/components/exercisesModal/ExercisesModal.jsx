import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import ModalBase from "../../../../components/ModalBase";
import { OrangeButton } from "../../../../components/Buttons";
import DraggableList from "./DraggableList";

export default ExercisesModal = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <ModalBase title="Exercises" toggleModal={toggleModal}>
      <View style={styles.container}>
        <DraggableList toggleModal={toggleModal} />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
