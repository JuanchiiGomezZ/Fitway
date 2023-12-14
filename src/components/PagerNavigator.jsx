import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { ORANGE_COLOR, WHITE_COLOR } from "../styles/styles";
import CreateSupersetModal from "../screens/workout/components/CreateSupersetModal";

const PagerNavigator = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef();

  const onPageSelected = (event) => {
    setCurrentPage(event.nativeEvent.position);
  };

  return (
    <>
      <View style={styles.paginatorContainer}>
        {pages.map((page, index) => (
          <TouchableOpacity key={index} onPress={() => ref.current?.setPage(index)}>
            <Text style={[styles.page, currentPage != index && styles.inactive]}>{page.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <PagerView style={styles.pager} ref={ref} initialPage={0} onPageSelected={onPageSelected}>
        {pages.map((page, index) => (
          <View key={index + 1} style={{ flex: 1 }}>
            {page.component}
          </View>
        ))}
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  paginatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
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
    color: "gray",
    borderBottomWidth: 0,
  },
  pager: {
    flex: 1,
  },
});

export default PagerNavigator;
