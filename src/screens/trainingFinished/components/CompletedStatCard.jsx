import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { GREEN_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { convertToHourMinutesSeconds } from "../../../helpers/timeFormater";
import Animated from "react-native-reanimated";

const CompletedStatCard = ({ title, content, enteringAnimation }) => {
  const [fontsLoaded] = useFonts({
    Fugaz: require("../../../assets/fonts/Fugaz.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <Animated.View style={styles.cardContainer} entering={enteringAnimation}>
      <View style={styles.contentContainer}>
        {content ? (
          <Text style={styles.contentText}>{convertToHourMinutesSeconds(content)}</Text>
        ) : (
          <AntDesign name="checkcircleo" size={35} color={GREEN_COLOR} />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
    </Animated.View>
  );
};

export default CompletedStatCard;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    borderWidth: 1,
    borderColor: ORANGE_COLOR,
    borderRadius: 10,
  },
  titleContainer: {
    width: "100%",
    backgroundColor: ORANGE_COLOR,
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontFamily: "Fugaz",
  },
  contentContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    color: WHITE_COLOR,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Fugaz",
  },
});
