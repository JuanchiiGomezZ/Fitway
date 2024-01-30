import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//HOOKS
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../../../styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

//COMPONENTS

export default CategorieItemList = ({ data, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(data);
  const minHeight = 200;
  const maxHeight = 40 * data.length;
  const height = useSharedValue(minHeight);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    height.value = withTiming(isOpen ? minHeight : maxHeight, {
      duration: 450,
    });
  };

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const CategorieHead = ({ title }) => (
    <View
      style={[styles.row, { justifyContent: "space-between", marginBottom: 10, marginTop: 15 }]}
    >
      <Text style={styles.categorieTitle}>{title}</Text>
      <Text style={styles.seeMore} onPress={toggleDropdown}>
        See {isOpen ? "Less ▲" : "More ▼"}
      </Text>
    </View>
  );

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
          const isChecked = items[index].checked;

          const updatedItems = items.map((item, idx) => {
            if (idx === index) {
              return { ...item, checked: !isChecked };
            }
            return item;
          });

          setItems(updatedItems);
        }}
        isChecked={item.checked}
      />
    </View>
  );
  return (
    <View>
      <CategorieHead title={title} />
      <View style={[{ gap: 5, height: 300 }]}>
        {items.map((item, index) => (
          <RenderItem item={item} index={index} key={item.name} />
        ))}
      </View>
    </View>
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
  seeMore: {
    color: GRAY_COLOR,
  },
});
