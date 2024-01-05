import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { ORANGE_COLOR, WHITE_COLOR } from "../styles/styles";
import Header from "./Header";

const PagerNavigator = ({ pages, goBack }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef();

  const onPageSelected = (event) => {
    setCurrentPage(event.nativeEvent.position);
  };

  return (
    <>
      <View style={styles.paginatorContainer}>
        {goBack && (
          <View style={{ position: "absolute", left: 0, alignSelf: "center" }}>
            <Header margin={false} />
          </View>
        )}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
          {pages.map((page, index) => (
            <TouchableOpacity key={index} onPress={() => ref.current?.setPage(index)}>
              <Text style={[styles.page, currentPage != index && styles.inactive]}>
                {page.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <PagerView style={styles.pager} ref={ref} initialPage={0} onPageSelected={onPageSelected}>
          {pages.map((page, index) => (
            <View key={index + 1} style={{ flex: 1 }}>
              {page.component}
            </View>
          ))}
        </PagerView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  paginatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
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
