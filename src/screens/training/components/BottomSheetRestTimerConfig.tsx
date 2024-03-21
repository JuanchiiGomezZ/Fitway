import React, { useState } from "react";

//HOOKS
import { useDispatch } from "react-redux";
import { setRestTime } from "../../../store/slices/trainingSlice";

//COMPONENTS
import Text from "@/theme/components/Text";
import Box from "@/theme/components/Box";
import BottomSheetModal from "../../../components/BottomSheetModal";
import { useSelector } from "react-redux";
import Slider from "@react-native-community/slider";
import { GRAY_COLOR, GRAY_LIGHT_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { convertToMinutes } from "../../../helpers/timeFormater";
import { ButtonClassicLong } from "../../../components/CustomButtons";
import { useNavigation } from "@react-navigation/native";

const BottomSheetRestTimerConfig = ({ route }: any) => {
  const { activeTrainingExercise } = useSelector((state: any) => state.training);
  const { actualRestTime, index } = route.params;
  const dispatch = useDispatch();
  const [newRestTime, setNewRestTime] = useState(actualRestTime);
  const { goBack } = useNavigation();

  const handleSaveNewTime = () => {
    dispatch(
      setRestTime({
        exerciseId: activeTrainingExercise.id,
        newRestTime,
        index: index,
      }),
    );
    goBack();
  };

  return (
    <BottomSheetModal title={"Rest Timer"}>
      <Box g="space10">
        <Box alignItems="center">
          <Text variant="headingMSecondary" color="secondary400">
            {convertToMinutes(newRestTime)}
          </Text>
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
        </Box>
        <ButtonClassicLong text={"Save"} short action={handleSaveNewTime} />
      </Box>
    </BottomSheetModal>
  );
};
export default BottomSheetRestTimerConfig;
