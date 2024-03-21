import React, { useEffect } from "react";
import Text from "@/theme/components/Text";

//HOOKS
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import useTimer from "../../training/hooks/useTimer";
import { convertToHourMinutesSeconds } from "../../../helpers/timeFormater";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../../helpers/storage";
import { cleanTrainingLog } from "../../../store/slices/trainingSlice";
import { useDispatch } from "react-redux";
//COMPONENTS
import { ButtonCircular } from "../../../components/CustomButtons";
import Row from "@/theme/components/Row";
import Box from "@/theme/components/Box";

const TrainigInProgressModal = ({ workoutId }: { workoutId: string }) => {
  const dispatch = useDispatch();
  const { seconds, start } = useTimer();
  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    const initialDate = storage.getString("workout_startDate_training");
    const initialTime = Math.round((new Date() - new Date(initialDate)) / 1000);

    start(initialTime || 0);
  }, []);

  const handleDiscardTraining = () => {
    dispatch(cleanTrainingLog());
    goBack();
  };

  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
      <Box
        width="100%"
        borderWidth={1}
        borderColor="secondary800"
        py="space3"
        bg="secondary1000"
        borderRadius="s"
        zIndex={3}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={10}
      >
        <Text variant="bodyMSecondary" color="secondary500">
          TRAINING IN PROGRESS
        </Text>
        <Row justifyContent="space-around" width="100%">
          <ButtonCircular
            icon={"times"}
            bgColor={"red"}
            size={"m"}
            action={() =>
              navigate("ConfirmationAlert", {
                title: "Are you sure",
                text: "This action will discard your training.",
                confirmAction: handleDiscardTraining,
              })
            }
          />
          <Text variant="headingLSecondary">{convertToHourMinutesSeconds(seconds)}</Text>
          <ButtonCircular
            icon="play"
            action={() => {
              navigate("Training", { id: workoutId });
            }}
            size={"m"}
          />
        </Row>
      </Box>
    </Animated.View>
  );
};

export default TrainigInProgressModal;
