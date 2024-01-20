import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";;
import { GRAY_COLOR,WHITE_COLOR } from "../../../../styles/styles";
import { Ionicons} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import MarkIcon from "./MarkIcon";

export default ExerciseSingleCard = ({ data, action, superset, isActive, index }) => {

  const Exercise = superset ? View : Pressable;
  const { numActiveExercise } = useSelector((state) => state.training);
  return (
    <Exercise
      style={[styles.row, styles.cardContainer, { paddingVertical: superset ? 0 : 6 }]}
      onLongPress={action}
    >
      <View style={[styles.row, { gap: 10 }]}>
        <Image
          source={
            data?.Multimedia?.exerciseImg
              ? { uri: data.Multimedia.exerciseImg }
              : require("../../../../assets/images/icon_fw_orange.png")
          }
          style={styles.exerciseImg}
        />
        <Text style={styles.exerciseText}>{data.name}</Text>
      </View>
      <View style={[styles.row, { gap: 5 }]}>
        {index == numActiveExercise && <MarkIcon />}
        {!superset && <Ionicons name="md-reorder-three-outline" size={30} color={GRAY_COLOR} />}
      </View>
    </Exercise>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: "space-between",
  },
  exerciseImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  exerciseText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "500",
  },
});
