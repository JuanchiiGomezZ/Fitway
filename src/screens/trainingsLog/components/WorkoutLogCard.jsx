import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//COMPONENTS
import CardContainer from "../../../components/CardContainer";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Entypo } from "@expo/vector-icons";

export default WorkoutLogCard = ({ index }) => {
  return (
    <CardContainer index={index}>
      <View style={styles.row}>
        <Image source={require("../../../assets/images/icon_fw_dark.png")} style={styles.iconImg} />
        <View style={styles.content}>
          <CardContainer.TitleSmall>Workout Name</CardContainer.TitleSmall>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={styles.timeText}>01:23:45</Text>
            <View style={[styles.row, { gap: -5 }]}>
              <Text style={styles.dateText}>12/12/2023</Text>
              <Entypo name="chevron-small-right" size={24} color={GRAY_COLOR} />
            </View>
          </View>
        </View>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  iconImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    gap: 3,
    height: 60,
  },
  timeText: {
    color: ORANGE_COLOR,
    fontSize: 22,
  },
  dateText: {
    color: GRAY_COLOR,
    fontSize: 16,
    alignSelf: "center",
  },
});
