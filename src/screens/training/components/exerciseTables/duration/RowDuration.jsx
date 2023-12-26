import React from "react";
import { Text, View } from "react-native";
import * as styles from "../../../../../styles/tableStyles";
import { BOX_COLOR, GRAY_COLOR, GREEN_COLOR } from "../../../../../styles/styles";
import { Feather } from "@expo/vector-icons";

//HOOKS
import { convertToMinutes, convertToMinutesSeconds } from "../../../../../helpers/timeFormater";

import useCountdown from "../../../hooks/useCountdown";
//COMPONENTS

export default RowDuration = ({ index, rowDetail }) => {
  const { secondsLeft, isTimeOver, start, isPaused } = useCountdown();

  return (
    <View
      style={[
        styles.row,
        styles.rowItems,
        { backgroundColor: isTimeOver ? "rgba(3, 205, 0, 0.23)" : BOX_COLOR },
      ]}
    >
      <Text style={styles.text}>{index + 1}</Text>
      <Text style={[styles.text, { width: 80 }]}>{convertToMinutes(rowDetail)}</Text>
      <Text style={[styles.text, styles.longItem, isTimeOver && { color: GRAY_COLOR }]}>
        {convertToMinutesSeconds(isTimeOver ? 0 : secondsLeft || rowDetail)}
      </Text>
      <Feather
        name={!isTimeOver ? (!isPaused ? "pause" : "play") : "check-circle"}
        style={[styles.text, styles.tableIcon, { color: isTimeOver ? GREEN_COLOR : GRAY_COLOR }]}
        onPress={() => start(rowDetail)}
      />
    </View>
  );
};
