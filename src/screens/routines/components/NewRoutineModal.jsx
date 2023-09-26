import React, { useState } from "react";
import { StyleSheet, Text, View, Keyboard, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  ORANGE_COLOR,
  ORANGE_DARK_COLOR,

} from "../../../styles/styles";

import Animated, { FadeIn, FadeOut, FadeInRight, FadeOutRight } from "react-native-reanimated";
import { ClassicInput } from "../../../components/Inputs";
import { OrangeButtonSmall, DisabledButtonSmall, CloseModalIcon } from "../../../components/Buttons";
import BackdropModals from "../../../components/BackdropModals";

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
      <BackdropModals toggleModal={toggleNewRoutineModal} />
      <Animated.View style={styles.modalContainer} entering={FadeInRight} exiting={FadeOutRight}>
        <View style={styles.header}>
          <Text style={styles.title}>{t("Routines.NewRoutineModal.title")}</Text>
          <CloseModalIcon task={toggleNewRoutineModal} />
        </View>

        <ClassicInput setInputChange={setName} inputChange={name} placeholder={"Routine name"} />

        <View>
          <Text style={styles.subtitle}>{t("Routines.NewRoutineModal.choose-difficulty")}:</Text>
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
          <Text style={styles.subtitle}>{t("Routines.NewRoutineModal.choose-visibility")}:</Text>
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
          <OrangeButtonSmall text={"Continue"} />
        )}
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
    top: "30%",
    left: "5%",
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 15,
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
    borderColor: ORANGE_DARK_COLOR,
    borderRadius: 10,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 3,
  },
  tagText: {
    color: ORANGE_DARK_COLOR,
    fontSize: 15,
    fontWeight: "400",
  },
  activeTagContainer: {
    borderColor: ORANGE_COLOR,
  },
  activeTagText: {
    color: ORANGE_COLOR,
  },
});
