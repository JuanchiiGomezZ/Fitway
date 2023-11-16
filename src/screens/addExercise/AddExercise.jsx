import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import Header from "../../components/Header";
import SearchBar from "./components/SearchBar";
import { OrangeButtonRounded } from "../../components/Buttons";
import Separator from "../../components/Separator";
import useExercisesStore from "../../hooks/redux/useExercisesStore";
import ExerciseCardSingle from "../workout/components/card/ExerciseCardSingle";
import PagerView from "react-native-pager-view";

//STYLES
import {
  BACKGROUND_COLOR,
  GRAY_COLOR,
  ORANGE_COLOR,
  PADDING_HORIZONTAL,
  PADDING_TOP,
  WHITE_COLOR,
} from "../../styles/styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { use } from "i18next";

export default AddExercise = () => {
  const { t } = useTranslation();
  const { getUserExercises } = useExercisesStore();
  const { userExercises, isLoading } = useSelector((state) => state.exercises);
  const { navigate } = useNavigation();

  useEffect(() => {
    getUserExercises();
  }, []);

  const ref = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Header title={"Exercises"} />
        <View style={{ marginBottom: 13 }}>
          <OrangeButtonRounded
            text={"Create Exercise"}
            icon={"plus"}
            action={() => navigate("CreateExercise")}
          />
        </View>
      </View>
      <ScrollView>
        <SearchBar />

        <View style={styles.paginatorContainer}>
          <TouchableOpacity>
            <Text style={[styles.page]}>All Exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.page, styles.inactive]}>My Exercises</Text>
          </TouchableOpacity>
        </View>

        <PagerView
          style={styles.pager}
          ref={ref}
          initialPage={0}
          onPageScroll={(e) => console.log(e)}
          onPageSelected={(e) => console.log(e)}
          onPageScrollStateChanged={(e) => console.log(e)}
        >
          <View key="1">
            <Text style={styles.page}>ALL EXERCISES</Text>
          </View>
          <View key="2">
            <Text style={styles.page}>MY EXERCISES</Text>
          </View>
        </PagerView>
      </ScrollView>
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
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paginatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    gap: 50,
  },
  page: {
    color: WHITE_COLOR,
    fontSize: 17,
    fontWeight: "700",
    paddingBottom: 5,
    borderBottomColor: ORANGE_COLOR,
    borderBottomWidth: 3,
  },
  inactive: {
    color: GRAY_COLOR,
    borderBottomWidth: 0,
  },

  pager: {
    flex: 1,
  },
});

{
  /* <View style={{ gap: 7 }}>
{userExercises?.length > 0 ? (
  userExercises.map((item, index) => (
    <ExerciseCardSingle key={item.id} data={item} index={index} />
  ))
) : (
  <Text style={{ textAlign: "center", color: WHITE_COLOR }}>Empty</Text>
)}
</View> */
}
