import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Keyboard, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import {
  backdropColor,
  backgroundColor,
  borderRadius,
  orangeColor,
  orangeDarkColor,
  redColor,
  whiteColor,
} from "../../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut, FadeInRight, FadeOutRight } from "react-native-reanimated";
import { ClassicInput } from "../../../components/Inputs";
import { ClassicButtonSmall, DisabledButtonSmall } from "../../../components/Buttons";

export default NewRoutineModal = ({ toggleNewRoutineModal }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState(null);
  const [visibilitty, setVisibilitty] = useState(true);

  const visibilities = [
    { name: "Private", value: false },
    { name: "Public", value: true },
  ];

  const difficulties = ["Beginer", "Intermediate", "Experienced", "Don´t know"];

  return (
    <>
      <Pressable style={styles.backdrop} onPress={toggleNewRoutineModal} entering={FadeIn} exiting={FadeOut} />

      <Animated.View style={styles.modalContainer} entering={FadeInRight} exiting={FadeOutRight}>
        <View style={styles.header}>
          <Text style={styles.title}>New routine</Text>
          <TouchableOpacity onPress={toggleNewRoutineModal}>
            <MaterialCommunityIcons style={styles.icon} name="close-thick" />
          </TouchableOpacity>
        </View>

        <ClassicInput setInputChange={setName} inputChange={name} placeholder={"Routine name"} />

        <View>
          <Text style={styles.subtitle}>Choose difficulty</Text>
          <View style={styles.tagsContainer}>
            {difficulties.map((item) => (
              <TouchableHighlight
                key={item}
                style={[styles.tagContainer, difficulty === item && styles.activeTagContainer]}
                onPress={() => {
                  setDifficulty(item);
                  Keyboard.dismiss();
                }}
                underlayColor="transparent"
              >
                <Text style={[styles.tagText, difficulty === item && styles.activeTagText]}>{item}</Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.subtitle}>Choose visibilitty</Text>
          <View style={styles.tagsContainer}>
            {visibilities.map((item) => (
              <TouchableHighlight
                key={item.name}
                style={[styles.tagContainer, visibilitty == item.value && styles.activeTagContainer]}
                onPress={() => {
                  setVisibilitty(item.value);
                  Keyboard.dismiss();
                }}
                underlayColor="transparent"
              >
                <Text style={[styles.tagText, visibilitty == item.value && styles.activeTagText]}>{item.name}</Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>

        {name.trim() < 1 || difficulty == null ? (
          <DisabledButtonSmall text={"Continue"} />
        ) : (
          <ClassicButtonSmall text={"Continue"} />
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: backdropColor,
    position: "absolute",
    zIndex: 3,
  },
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
    paddingBottom:15,
    zIndex: 4,
    gap: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  icon: {
    color: "white",
    fontSize: 20,
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 5,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  tagContainer: {
    borderWidth: 1,
    borderColor: orangeDarkColor,
    borderRadius: 10,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 3,
  },
  tagText: {
    color: orangeDarkColor,
    fontSize: 15,
    fontWeight: "400",
  },
  activeTagContainer: {
    borderColor: orangeColor,
  },
  activeTagText: {
    color: orangeColor,
  },
});
