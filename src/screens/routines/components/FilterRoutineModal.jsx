import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import FilterOptionComponent from "./FilterOptionComponent";
import { ButtonClassicLong } from "../../../components/CustomButtons";
import BottomSheetModal from "../../../components/BottomSheetModal";

export default FilterRoutineModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [creator, setCreator] = useState(null);

  const days = [2, 3, 4, 5, 6, 7];
  const difficulties = ["Beginer", "Intermediate", "Experienced"];
  const creators = ["FITWAY", "Community"];

  return (
    <BottomSheetModal toggleModal={toggleModal} title={t("Routines.FilterRoutineModal.title")}>
      <FilterOptionComponent
        data={days}
        state={selectedDay}
        setState={setSelectedDay}
        title={t("Routines.FilterRoutineModal.days")}
      />
      <FilterOptionComponent
        data={difficulties}
        state={difficulty}
        setState={setDifficulty}
        title={t("Routines.FilterRoutineModal.difficulty")}
      />
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
});
