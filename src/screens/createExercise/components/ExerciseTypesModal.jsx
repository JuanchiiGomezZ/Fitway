import React from "react";
import { StyleSheet, Text, View, Pressable, Keyboard } from "react-native";
import ModalBase from "../../../components/ModalBase";
import exerciseTypes from "../../../data/exerciseTypes.json";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import SeparatingLine from "../../../components/SeparatingLine";
import { useNavigation } from "@react-navigation/native";

export default ExerciseTypesModal = () => {
  const { navigate } = useNavigation();

  const handlePickType = (type) => {
    Keyboard.dismiss();
    navigate("CreateExercise", { type });
  };

  return (
    <ModalBase title="Exercise types">
      <View style={{ marginTop: 20, gap: 13 }}>
        {exerciseTypes.map((type) => (
          <>
            <Pressable
              style={styles.cardContainer}
              onPress={() => handlePickType(type)}
              key={type.value}
            >
              <Text style={styles.nameText}>{type.name}</Text>
              <Text style={styles.exampleText}>Example: {type.examples.join(", ")}</Text>
              <View style={styles.tagsContainer}>
                {type.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </Pressable>
            <SeparatingLine key={type.id} />
          </>
        ))}
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    gap: 5,
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
});
