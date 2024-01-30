import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { SearchInput } from "../../../../components/Inputs";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { GRAY_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import muscles from "../../../../data/muscles";
import elements from "../../../../data/elements";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters, setExerciseTypeFilter } from "../../../../store/slices/filterExercises";

export default SearchBar = () => {
  const [querySearch, setQerySearch] = useState("");
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { musclesFilter, elementsFilter, exerciseTypeFilter } = useSelector(
    (state) => state.filterExercises,
  );
  const dispatch = useDispatch();
  const scrollViewRef = useRef();

  const handleClearAll = () => {
    dispatch(clearFilters());
    scrollViewRef.current.scrollTo({ x: 0, animated: true });
  };

  useEffect(() => {
    console.log("first");
  }, []);

  return (
    <View style={styles.barContainer}>
      <SearchInput
        placeholder={t("global.search") + "..."}
        inputChange={querySearch}
        setInputChange={setQerySearch}
      />
      <View style={styles.row}>
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
            <Entypo
              name="chevron-thin-down"
              size={16}
              color={GRAY_COLOR}
              style={{ marginTop: 2 }}
            />
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
  barContainer: {
    gap: 8,
    marginBottom: 50,
  },
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
