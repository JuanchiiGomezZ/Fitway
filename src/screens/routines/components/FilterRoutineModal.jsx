import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Dimensions, TouchableHighlight } from "react-native";
import { useTranslation } from "react-i18next";
import { backdropColor, backgroundColor, borderRadius, grayLightColor, whiteColor } from "../../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import FilterOptionComponent from "./FilterOptionComponent";
import { OrangeButtonSmall, WhiteButtonSmall, CloseModalIcon } from "../../../components/Buttons";

const width = Dimensions.get("screen").width;
export default FilterRoutineModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [creator, setCreator] = useState(null);

  const days = [2, 3, 4, 5, 6, 7];
  const difficulties = ["Beginer", "Intermediate", "Experienced"];
  const creators = ["FITWAY", "Community"];

  return (
    <>
      <Pressable style={styles.backdrop} onPress={toggleModal} entering={FadeIn} exiting={FadeOut} />

      <Animated.View style={styles.modalContainer} entering={SlideInDown} exiting={SlideOutDown}>
        <View style={styles.head}>
          <Text style={styles.headText}>{t("Routines.FilterRoutineModal.title")}</Text>
          <CloseModalIcon task={toggleModal} />
        </View>

        <FilterOptionComponent data={days} state={selectedDay} setState={setSelectedDay} title={t("Routines.FilterRoutineModal.days")} />
        <FilterOptionComponent data={difficulties} state={difficulty} setState={setDifficulty} title={t("Routines.FilterRoutineModal.difficulty")} />
        <FilterOptionComponent data={creators} state={creator} setState={setCreator} title={t("Routines.FilterRoutineModal.creator")} />

        <View style={styles.buttonsContainer}>
          <View style={{ width: "65%" }}>
            <OrangeButtonSmall text={t("Routines.FilterRoutineModal.apply")} task={toggleModal} />
          </View>
          <View style={{ width: "32%" }}>
            <WhiteButtonSmall text={t("Routines.FilterRoutineModal.clear-filters")} />
          </View>
        </View>
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
    minHeight: 300,
    width: width,
    position: "absolute",
    backgroundColor: backgroundColor,
    bottom: 0,
    borderRadius: borderRadius,
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 15,
    zIndex: 4,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headText: {
    color: whiteColor,
    fontSize: 25,
    fontWeight: "700",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
});
