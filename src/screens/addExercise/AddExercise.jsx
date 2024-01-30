import React from "react";
import { StyleSheet, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import ScreenContainer from "../../components/ScreenContainer";
import Header from "../../components/Header";
import { ButtonRounded } from "../../components/CustomButtons";
import AllExercises from "./AllExercises/AllExercises";
import MyExercises from "./MyExercises/MyExercises";

//STYLES
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
          <Header title={"Exercises"} margin={false} />
          <ButtonRounded
            text={"Create Exercise"}
            icon={"plus"}
            action={() => navigate("CreateExercise")}
          />
        </View>
      </View>
      <PagerNavigator pages={pages} style={{ marginTop: 20, marginBottom: 20 }} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
