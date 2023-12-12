import React from "react";
import { StyleSheet, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import SearchBar from "./components/SearchBar";
import { ButtonRounded } from "../../components/CustomButtons";
import AllExercises from "./components/AllExercises";
import MyExercises from "./components/MyExercises";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";
import PagerNavigator from "../../components/PagerNavigator";

export default AddExercise = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const pages = [
    { title: "All Exercises", component: <AllExercises /> },
    { title: "My Exercises", component: <MyExercises /> },
  ];

  return (
    <ScreenContainer>
      <View>
        <View style={styles.row}>
          <Header title={"Exercises"} />
          <ButtonRounded
            text={"Create Exercise"}
            icon={"plus"}
            action={() => navigate("CreateExercise")}
          />
        </View>
        <SearchBar />
      </View>
      <PagerNavigator pages={pages} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
