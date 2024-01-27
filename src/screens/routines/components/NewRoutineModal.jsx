import React, { useState } from "react";
import { StyleSheet, Text, View, Keyboard, TouchableHighlight } from "react-native";

// HOOKS
import { useTranslation } from "react-i18next";
import useRoutinesStore from "../../../hooks/redux/useRoutinesStore";
import { useNavigation } from "@react-navigation/native";

// COMPONENTS
import { ClassicInput } from "../../../components/Inputs";
import ModalBase from "../../../components/ModalBase";
import { ButtonClassicLong } from "../../../components/CustomButtons";

import { ORANGE_COLOR, ORANGE_DARK_COLOR } from "../../../styles/styles";

export default NewRoutineModal = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { createNewRoutine } = useRoutinesStore();
  const [name, setName] = useState("");
  const [visibilitty, setVisibilitty] = useState(true);

  const visibilities = [
    { name: "Private", value: false },
    { name: "Public", value: true },
  ];

  const handleCreateRoutine = async () => {
    await createNewRoutine({ name, public: visibilitty });
    navigate("MyRoutines");
  };

  const activeButton = name.trim() < 1;
  return (
    <ModalBase short={true} title={t("Routines.NewRoutineModal.title")}>
      <View style={{ gap: 20 }}>
        <ClassicInput setInputChange={setName} inputChange={name} placeholder={"Routine name"} />
        <View>
          <Text style={styles.subtitle}>{t("Routines.NewRoutineModal.choose-visibility")}:</Text>
          <View style={styles.tagsContainer}>
            {visibilities.map((item) => (
              <TouchableHighlight
                key={item.name}
                style={[
                  styles.tagContainer,
                  visibilitty == item.value && styles.activeTagContainer,
                ]}
                onPress={() => {
                  setVisibilitty(item.value);
                  Keyboard.dismiss();
                }}
                underlayColor="transparent"
              >
                <Text style={[styles.tagText, visibilitty == item.value && styles.activeTagText]}>
                  {item.name}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>
        <ButtonClassicLong
          text={"Continue"}
          disabled={activeButton}
          action={handleCreateRoutine}
          short={true}
        />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 17,
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
