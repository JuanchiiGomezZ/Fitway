import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import ModalBase from "../../../components/ModalBase";
import exerciseTypes from "../../../data/exerciseTypes.json";
import { BACKGROUND_COLOR, GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";

export default ExerciseTypesModal = ({ toggleModal }) => {
  return (
    <ModalBase title="Exercise types" toggleModal={() => toggleModal(null)}>
      <View>
        {exerciseTypes.map((type) => (
          <View key={type.id}>
            <Pressable
              style={styles.cardContainer}
              onPress={() => {
                toggleModal({ value: type.value, name: type.name });
              }}
            >
              <Text style={styles.nameText}>{type.name}</Text>
              <Text style={styles.exampleText}>Example: {type.examples.join(", ")}</Text>
              <View style={styles.tagsContainer}>
                {type.tags.map((tag, index) => (
                  <Text key={tag} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </Pressable>
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    gap: 5,
    borderBottomColor: "red",
  },
  nameText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "500",
  },
  exampleText: {
    color: GRAY_COLOR,
    fontWeight: "300",
    fontSize: 16,
  },
  tag: {
    color: WHITE_COLOR,
    padding: 5,
    backgroundColor: ORANGE_COLOR,
    fontWeight: "700",
    borderRadius: 5,
    fontSize: 13,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
    marginVertical: 10,
  },
});
