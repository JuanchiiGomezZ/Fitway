import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { GRAY_LIGHT_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../../styles/styles";

export default ExerciseHistory = () => {
  const barData = [
    { value: 21, label: "13/11" },
    { value: 50, label: "14/11" },
    { value: 74, label: "15/11" },
    { value: 32, label: "16/11" },
    { value: 60, label: "17/11" },
    { value: 25, label: "19/11" },
    { value: 30, label: "21/11" },
    { value: 10, label: "22/11" },
    { value: 25, label: "23/11" },
    { value: 30, label: "24/11" },
  ];

  return (
    <View>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor={ORANGE_COLOR}
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        rulesColor={GRAY_LIGHT_COLOR}
        xAxisLabelTextStyle={{ color: WHITE_COLOR }}
        scrollToEnd
        renderTooltip={() => <Text></Text>}
        yAxisTextStyle={{ color: WHITE_COLOR }}
      />
    </View>
  );
};
