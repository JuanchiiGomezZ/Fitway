import React from "react";
import { StyleSheet, View } from "react-native";
import ModalBase from "../../../../components/ModalBase";
import DraggableList from "./DraggableList";

export default ExercisesModal = () => {
  return (
    <ModalBase title="Exercises">
      <View style={styles.container}>
        <DraggableList />
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
