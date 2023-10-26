import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import Header from "../../components/Header";
import AddImage from "./components/AddImage";
import BottomsheetImage from "./components/BottomsheetImage";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default CreateExercise = () => {
  const { t } = useTranslation();
  const [bottomsheet, setBottomsheet] = useState(false);

  const toggleBottomsheet = () => {
    setBottomsheet((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <Header title={"Create Exercise"} />

      <View style={styles.contentContainer}>
        <AddImage toggleBottomsheet={toggleBottomsheet} />
      </View>
      {bottomsheet && <BottomsheetImage toggleBottomsheet={toggleBottomsheet} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
