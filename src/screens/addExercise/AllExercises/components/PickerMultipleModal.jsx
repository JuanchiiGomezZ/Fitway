import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setMusclesFilter,
  setElementsFilter,
  clearFilters,
} from "../../../../store/slices/filterExercises";

//COMPONENTS
import { ButtonClassicLong } from "../../../../components/CustomButtons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ModalBase from "../../../../components/ModalBase";
import { ClassicInput } from "../../../../components/Inputs";

export default PickerMultipleModal = ({ route }) => {
  const { t } = useTranslation();
  const { data, title } = route.params;
  const { goBack } = useNavigation();
  const [items, setItems] = useState(data);
  const [inputChange, setInputChange] = useState("");
  const dispatch = useDispatch();
  const { musclesFilter, elementsFilter } = useSelector((state) => state.filterExercises);

  useEffect(() => {
    if (title === "Muscles") {
      setItems(
        data.map((item) => ({
          ...item,
          checked: musclesFilter.includes(item.name),
        })),
      );
    }
    if (title === "Elements") {
      setItems(
        data.map((item) => ({
          ...item,
          checked: elementsFilter.includes(item.name),
        })),
      );
    }
  }, []);

  const RenderItem = ({ item, index }) => (
    <View style={[styles.row, { justifyContent: "space-between", height: 35 }]}>
      <View style={[styles.row, { marginVertical: 3 }]}>
        <Image style={styles.image} source={{ uri: item.img }} />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <BouncyCheckbox
        fillColor={ORANGE_COLOR}
        iconStyle={{ borderRadius: 4 }}
        innerIconStyle={{ borderRadius: 4 }}
        onPress={() => {
          const updatedItems = items.map((innerItem) => {
            if (item.name === innerItem.name) {
              return { ...innerItem, checked: !item.checked };
            }
            return innerItem;
          });

          setItems(updatedItems);
        }}
        isChecked={item.checked}
      />
    </View>
  );

  const handleClearAll = () => {
    dispatch(clearFilters());
    setItems(data);
    goBack();
  };

  const handleApplyFilter = () => {
    if (title === "Muscles") {
      dispatch(setMusclesFilter(items.filter((item) => item.checked).map((item) => item.name)));
    }
    if (title === "Elements") {
      dispatch(setElementsFilter(items.filter((item) => item.checked).map((item) => item.name)));
    }
    goBack();
  };

  return (
    <ModalBase title={title} style={{ height: "80%" }}>
      <ClassicInput
        setInputChange={setInputChange}
        inputChange={inputChange}
        placeholder={"Search"}
        style={{ marginTop: 5, marginBottom: 10 }}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 7 }}>
        {items
          .filter((data) => data.name.toLocaleLowerCase().includes(inputChange.toLocaleLowerCase()))
          .map((item, index) => (
            <RenderItem item={item} index={index} key={item.name} />
          ))}
      </ScrollView>
      <View style={[styles.row, { paddingTop: 15 }]}>
        <View style={{ width: "30%" }}>
          <ButtonClassicLong
            text="Clear All"
            short
            bgColor={WHITE_COLOR}
            color={ORANGE_COLOR}
            action={handleClearAll}
          />
        </View>
        <View style={{ width: "70%" }}>
          <ButtonClassicLong text="Apply" short action={handleApplyFilter} />
        </View>
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  itemText: { color: WHITE_COLOR, fontWeight: "300", fontSize: 17 },
  categorieTitle: {
    color: WHITE_COLOR,
    fontSize: 22,
    fontWeight: "bold",
  },
});
