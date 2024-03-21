import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { ORANGE_COLOR, WHITE_COLOR } from "../styles/styles";
import Header from "./Header";
import Row from "./Row";

const PagerNavigator = ({ pages, goBack, ...props }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef();

  const onPageSelected = (event) => {
    setCurrentPage(event.nativeEvent.position);
  };

  return (
    <>
      <Row style={[styles.paginatorContainer, props.style]}>
        {goBack && (
          <View style={{ position: "absolute", left: 0, alignSelf: "center" }}>
            <Header style={{ margin: 0 }} />
          </View>
        )}
        <Row style={{ gap: 30 }}>
          {pages.map((page, index) => (
            <TouchableOpacity key={index} onPress={() => ref.current?.setPage(index)}>
              <Text style={[styles.page, currentPage != index && styles.inactive]}>
                {page.title}
              </Text>
            </TouchableOpacity>
          ))}
        </Row>
      </Row>

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
    borderBottomColor: "transparent",
  },
  pager: {
    flex: 1,
  },
});

export default PagerNavigator;
