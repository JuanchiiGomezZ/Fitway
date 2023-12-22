import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//HOOKS
import { useDispatch } from "react-redux";
import { setRestTime } from "../../../../store/slices/trainingSlice";

//COMPONENTS
import BottomSheetModal from "../../../../components/BottomSheetModal";
import { useSelector } from "react-redux";
import Slider from "@react-native-community/slider";
import { GRAY_COLOR, GRAY_LIGHT_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../../styles/styles";
import { convertToMinutes } from "../../../../helpers/timeFormater";
import { toggleRestTimerBottomSheet } from "../../../../store/slices/trainingSlice";
import { ButtonClassicLong } from "../../../../components/CustomButtons";

export default BottomSheetRestTimerConfig = () => {
  const { activeExercise, restTimerBottomSheet } = useSelector((state) => state.training);
  const { actualRestTime, index } = restTimerBottomSheet;
  const dispatch = useDispatch();

  const [newRestTime, setNewRestTime] = useState(actualRestTime);

  const handleSaveNewTime = () => {
    dispatch(
      setRestTime({
        exerciseId: activeExercise.id,
        newRestTime,
        index: index,
      }),
    );
    dispatch(toggleRestTimerBottomSheet());
  };

  return (
    <BottomSheetModal
      title={"Rest Timer"}
      toggleModal={() => dispatch(toggleRestTimerBottomSheet())}
    >
      <View style={{ gap: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.restText}> {convertToMinutes(newRestTime)}</Text>
          <Slider
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={300}
            onValueChange={(value) => {
              setNewRestTime(value);
            }}
            step={15}
            value={newRestTime}
            minimumTrackTintColor={ORANGE_COLOR}
            maximumTrackTintColor={GRAY_COLOR}
            thumbTintColor={WHITE_COLOR}
          />
        </View>
        <ButtonClassicLong text={"Save"} short={true} action={handleSaveNewTime} />
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  restText: {
    color: GRAY_LIGHT_COLOR,
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 3,
    marginBottom: 10,
  },
});
