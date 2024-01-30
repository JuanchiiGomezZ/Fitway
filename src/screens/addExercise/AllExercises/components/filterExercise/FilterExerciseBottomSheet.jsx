import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import ScreenContainer from "../../../../../components/ScreenContainer";
import Header from "../../../../../components/Header";
import { ButtonClassicLong } from "../../../../../components/CustomButtons";
import CategorieItemList from "./CategorieItemList";

//DATA
import muscles from "../../../../../data/muscles.json";
import elements from "../../../../../data/elements.json";
import { GRAY_DARK_COLOR, PADDING_HORIZONTAL } from "../../../../../styles/styles";
export default FilterExerciseBottomSheet = () => {
  const { t } = useTranslation();

  return (
    <ScreenContainer
      style={{ justifyContent: "space-between", paddingHorizontal: 0 }}
    >
      <View style={{ paddingHorizontal: PADDING_HORIZONTAL, flex: 1 }}>
        <Header title="Filters" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CategorieItemList data={muscles} title={"Muscles"} />

          {/* <CategorieItemList data={elements} title={"Elements"} /> */}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={{ paddingHorizontal: PADDING_HORIZONTAL }}>
          <ButtonClassicLong text="Apply" />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 12,
    borderTopColor: GRAY_DARK_COLOR,
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
