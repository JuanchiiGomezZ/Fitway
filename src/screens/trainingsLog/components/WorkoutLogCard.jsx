import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//COMPONENTS
import CardContainer from "../../../components/CardContainer";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default WorkoutLogCard = ({ index, data }) => {
  const { navigate } = useNavigation();

  const handleNavigate = () => {
    navigate("WorkoutLogDetails", { id: 1 });
  };

  return (
    <CardContainer index={index} action={handleNavigate}>
      <View style={styles.row}>
        <Image source={require("../../../assets/images/icon_fw_dark.png")} style={styles.iconImg} />
        <View style={styles.content}>
          <CardContainer.TitleSmall>{data.name}</CardContainer.TitleSmall>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={styles.timeText}>{data.time}</Text>
            <View style={[styles.row, { gap: -5 }]}>
              <Text style={styles.dateText}>{data.date}</Text>
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
