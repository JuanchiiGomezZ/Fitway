import React, { useState } from "react";

//COMPONENTS
import { Calendar } from "react-native-calendars";
import {
  ORANGE_COLOR,
  BACKGROUND_COLOR,
  WHITE_COLOR,
  GRAY_DARK_COLOR,
} from "../../../styles/styles";

export default CustomCalendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(true);

  const theme = {
    // Cambia los colores según tus preferencias
    backgroundColor: BACKGROUND_COLOR,
    calendarBackground: BACKGROUND_COLOR,
    selectedDayBackgroundColor: ORANGE_COLOR,
    selectedDayTextColor: WHITE_COLOR,
    todayTextColor: ORANGE_COLOR,
    dayTextColor: WHITE_COLOR,
    dotColor: ORANGE_COLOR,
    selectedDotColor: WHITE_COLOR,
    arrowColor: ORANGE_COLOR,
    monthTextColor: WHITE_COLOR,
    indicatorColor: ORANGE_COLOR,
    disabledArrowColor: GRAY_DARK_COLOR,
    textMonthFontWeight: "bold",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  const onMonthChange = (month) => {
    if (currentDate.toISOString().split("T")[0] == month.dateString) {
      setCurrentMonth(true);
    } else {
      setCurrentMonth(false);
    }
  };

  onDayPress = (day) => {
    console.log(day);
  };

  return (
    <Calendar
      theme={theme}
      markedDates={{
        "2023-12-20": { selected: true, marked: true },
        "2023-12-19": { selected: true, marked: true },
        "2023-12-15": { selected: true, marked: true },
        "2023-12-14": { selected: true, marked: true },
        "2023-12-12": { selected: true, marked: true },
        "2023-12-11": { selected: true, marked: true },
        "2023-12-08": { selected: true, marked: true },
        "2023-12-07": { selected: true, marked: true },
        "2023-12-06": { selected: true, marked: true },
        "2023-12-04": { selected: true, marked: true },
      }}
      hideExtraDays
      displayLoadingIndicator={false}
      onMonthChange={onMonthChange}
      disableArrowRight={currentMonth}
      onDayPress={onDayPress}
    />
  );
};
