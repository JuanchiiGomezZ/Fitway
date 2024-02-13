import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../../../store/slices/filterExercises";
import { GRAY_COLOR, RED_COLOR, WHITE_COLOR, ORANGE_COLOR } from "../../../../styles/styles";
import muscles from "../../../../data/muscles.json";
import elements from "../../../../data/elements.json";

//COMPONENTS
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default FilterBar = () => {
  const { t } = useTranslation();
  const { musclesFilter, elementsFilter, exerciseTypeFilter } = useSelector(
    (state) => state.filterExercises,
  );
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  const { navigate } = useNavigation();

  const handleClearAll = () => {
    dispatch(clearFilters());
    scrollViewRef.current.scrollTo({ x: 0, animated: true });
  };

  return (
    <View style={[styles.row, { marginTop: 5 }]}>
      <View style={[styles.row, { paddingHorizontal: 5 }]}>
        <Entypo
          name="sound-mix"
          size={20}
          color="white"
          style={{ transform: [{ rotate: "90deg" }] }}
          onPress={() => {
            navigate("FilterExerciseBottomSheet");
          }}
        />
        <Text style={styles.filterText}>Filters</Text>
      </View>
      <ScrollView
        contentContainerStyle={[styles.row]}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        <TouchableOpacity style={[styles.categorieContainer, styles.row]}>
          <Text style={styles.categorieName}>Sort By</Text>
          <Entypo name="chevron-thin-down" size={16} color={GRAY_COLOR} style={{ marginTop: 2 }} />
        </TouchableOpacity>
        <CategorieFilter
          action={() => navigate("PickerMultipleModal", { title: "Muscles", data: muscles })}
          text={"Muscles"}
          active={musclesFilter.length > 0}
        />
        <CategorieFilter
          action={() => navigate("PickerMultipleModal", { title: "Elements", data: elements })}
          text={"Elements"}
          active={elementsFilter.length > 0}
        />
        <CategorieFilter action={() => {}} text={"Exercise Type"} active={exerciseTypeFilter} />

        <TouchableOpacity
          style={[
            styles.categorieContainer,
            {
              borderColor: RED_COLOR,
              paddingHorizontal: 5,
              paddingVertical: 5,
              backgroundColor: RED_COLOR,
            },
          ]}
          onPress={handleClearAll}
        >
          <Feather name="trash-2" size={18} color={WHITE_COLOR} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const CategorieFilter = ({ text, active, action }) => (
  <TouchableOpacity
    style={[styles.categorieContainer, styles.row, active > 0 && styles.categorieActive]}
    onPress={action}
  >
    <Text style={[styles.categorieName, active && styles.categorieTextActive]}>{text}</Text>
    {active && (
      <AntDesign name="closecircle" size={16} color={WHITE_COLOR} style={{ marginTop: 1 }} />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  categorieContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GRAY_COLOR,
  },
  categorieName: {
    color: GRAY_COLOR,
    fontSize: 16,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  filterText: {
    color: WHITE_COLOR,
    fontWeight: "500",
    fontSize: 16,
  },
  categorieActive: {
    backgroundColor: ORANGE_COLOR,
    borderColor: "transparent",
  },
  categorieTextActive: {
    color: WHITE_COLOR,
    fontWeight: "500",
  },
});
