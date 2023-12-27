import React, { useEffect } from "react";
import { Text, View } from "react-native";
import * as styles from "../../../../../styles/tableStyles";
import { BOX_COLOR, GRAY_COLOR, GREEN_COLOR } from "../../../../../styles/styles";
import { AntDesign } from "@expo/vector-icons";

//HOOKS
import { convertToMinutes, convertToMinutesSeconds } from "../../../../../helpers/timeFormater";
import useCountdown from "../../../hooks/useCountdown";

export default RowDuration = ({ index, rowDetail, handleChange, input }) => {
  const { secondsLeft, isTimeOver, start, isPaused } = useCountdown();
  const { done } = input || {};

  useEffect(() => {
    if (isTimeOver) handleChange(index, "done", true);
  }, [isTimeOver]);

  const handleStartTimer = () => {
    if (done) handleChange(index, "done", false);
    start(rowDetail);
  };

  return (
    <View
      style={[
        styles.row,
        styles.rowItems,
        { backgroundColor: done ? "rgba(3, 205, 0, 0.23)" : BOX_COLOR },
      ]}
    >
      <Text style={styles.text}>{index + 1}</Text>
      <Text style={[styles.text, { width: 80 }]}>{convertToMinutes(rowDetail)}</Text>
      <Text style={[styles.text, styles.longItem, done && { color: GRAY_COLOR }]}>
        {convertToMinutesSeconds(isTimeOver ? 0 : secondsLeft || rowDetail)}
      </Text>
      <AntDesign
        name={!done ? (!isPaused ? "pausecircleo" : "playcircleo") : "checkcircleo"}
        style={[styles.text, styles.tableIcon, { color: done ? GREEN_COLOR : GRAY_COLOR }]}
        onPress={handleStartTimer}
      />
    </View>
  );
};
