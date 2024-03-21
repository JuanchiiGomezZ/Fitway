import { View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { GRAY_LIGHT_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import originalData from "../data.json";
import TableExercise from "./components/TableExercise";
import { FlatList } from "react-native-gesture-handler";
import Row from "../../../../components/Row";
import { Feather } from "@expo/vector-icons";

export default ExerciseHistory = () => {
  return (
    <View>
      <FlatList
        data={originalData.ExerciseLogs}
        renderItem={({ item }) => <TableExercise data={item} />}
        ListHeaderComponent={
          <View style={{ gap: 5 }}>
            <Row style={{ justifyContent: "space-between" }}>
              <Text
                style={{
                  color: WHITE_COLOR,
                  fontSize: 25,
                  fontWeight: "700",
                }}
              >
                Stats (Max weight)
              </Text>
              <Feather name="refresh-ccw" size={20} color={GRAY_LIGHT_COLOR} />
            </Row>
            <LineChart
              color={ORANGE_COLOR}
              dataPointsColor={WHITE_COLOR}
              xAxisLabelTextStyle={{ color: WHITE_COLOR }}
              yAxisTextStyle={{ color: WHITE_COLOR }}
              hideRules
              data={formatByMaxWeight(originalData.ExerciseLogs)}
              textColor1={WHITE_COLOR}
              textShiftY={20}
              textShiftX={10}
              textFontSize1={15}
              scrollToEnd
              showTextOnFocus
              showStripOnFocus
              focusEnabled
            />
          </View>
        }
        contentContainerStyle={{ gap: 20, paddingBottom: 20 }}
        maxToRenderPerBatch={5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
  return formattedDate;
}

function formatByMaxWeight(data) {
  function getMaxWeight(stats) {
    const weights = stats
      .filter((stat) => !isNaN(stat.weight))
      .map((stat) => parseFloat(stat.weight));
    if (weights.length === 0) return 0;
    return Math.max(...weights);
  }

  const formattedData = data
    .filter((item) => {
      const maxWeight = getMaxWeight(item.stats);
      return maxWeight > 0;
    })
    .map((item) => {
      const maxWeight = getMaxWeight(item.stats);
      return {
        value: maxWeight,
        label: formatDate(item.createdAt),
        dataPointText: `${maxWeight}kg`,
      };
    });

  return formattedData;
}

function formatByVolume(data) {
  const barData = data.reduce((acc, item) => {
    const validStats = item.stats.filter(
      (stat) => Number(stat.reps) > 0 || Number(stat.weight) > 0,
    );

    const values = validStats.map((stat) => stat.reps * stat.weight);
    const value = values.reduce((sum, val) => sum + val, 0);

    if (validStats.length > 0) {
      const formattedDate = formatDate(item.createdAt);
      acc = [
        ...acc,
        {
          value,
          label: formattedDate,
          dataPointText: `${value}kg`,
        },
      ];
    }
    return acc;
  }, []);
  return barData;
}
