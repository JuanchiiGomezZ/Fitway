import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import FilterOptionComponent from "./FilterOptionComponent";
import { ButtonClassicLong } from "../../../components/CustomButtons";
import BottomSheetModal from "../../../components/BottomSheetModal";
import Slider from "@react-native-community/slider";

export default FilterRoutineModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const [workouts, setWorkouts] = useState(0);
  const [creator, setCreator] = useState(null);
  const creators = ["FITWAY", "Community"];

  return (
    <BottomSheetModal toggleModal={toggleModal} title={t("Routines.FilterRoutineModal.title")}>
      <View>
        <Text style={styles.optionName}>Workouts: {workouts} </Text>
        <Slider
          style={{ width: "100%", transform: [{ scaleX: 1.045 }] }}
          minimumValue={0}
          maximumValue={7}
          onValueChange={(value) => setWorkouts(value)}
          step={1}
          value={workouts}
          minimumTrackTintColor={ORANGE_COLOR}
          maximumTrackTintColor={GRAY_COLOR}
          thumbTintColor={WHITE_COLOR}
        />
      </View>
      <FilterOptionComponent
        data={creators}
        state={creator}
        setState={setCreator}
        title={t("Routines.FilterRoutineModal.creator")}
      />

      <View style={styles.buttonsContainer}>
        <View style={{ width: "65%" }}>
          <ButtonClassicLong
            text={t("Routines.FilterRoutineModal.apply")}
            action={toggleModal}
            short={true}
          />
        </View>
        <View style={{ width: "32%" }}>
          <ButtonClassicLong
            text={t("Routines.FilterRoutineModal.clear-filters")}
            short={true}
            color={ORANGE_COLOR}
            bgColor={WHITE_COLOR}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
  optionName: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "600",
  },
});
