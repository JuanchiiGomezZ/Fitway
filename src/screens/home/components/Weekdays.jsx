/**
 * Renders a row of weekdays with corresponding icons.
 *
 * @returns {React.Component} The rendered component.
 */
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { boxBackgroundColor, orangeColor, backgroundColor, whiteColor, greenColor } from "../../../styles/styles";
import { FontAwesome } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default Weekdays = () => {
  const { t } = useTranslation();

  const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const dayOfWeek = new Date().getDay();

  const initialWeekDaysArr = weekDays.map((day, index) => ({
    name: t(`weekdays.${day}`).slice(0, 2).toUpperCase(),
    active: false,
    today: index === dayOfWeek,
  }));

  return (
    <View style={styles.daysContainer}>
      {initialWeekDaysArr.map((item, index) => (
        <View style={styles.dayContainer} key={index}>
          <View style={[styles.day, item.today && styles.activeDay]}>
            <Text style={styles.dayText}>{item.name}</Text>
          </View>
          {!item.active ? (
            <FontAwesome name="check" size={20} color={greenColor} />
          ) : (
            <FontAwesome name="circle-o" size={20} color={orangeColor} />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: screenWidth * 0.02,
    marginTop: 10,
    height:65
  },
  day: {
    height: screenWidth * 0.11,
    width: screenWidth * 0.11,
    borderRadius: 25,
    backgroundColor: boxBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    color: whiteColor,
    fontSize: 18,
    fontWeight: "800",
  },
  activeDay: {
    backgroundColor: orangeColor,
  },
  statusPoint: {
    width: 10,
    height: 10,
    backgroundColor: backgroundColor,
    borderWidth: 2,
    borderColor: orangeColor,
    borderRadius: 5,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
