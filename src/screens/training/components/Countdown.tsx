import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  BACKGROUND_COLOR,
  BOX_COLOR,
  GRAY_COLOR,
  GRAY_LIGHT_COLOR,
  ORANGE_COLOR,
  PADDING_HORIZONTAL,
  WHITE_COLOR,
} from "../../../styles/styles";
import Text from "@/theme/components/Text";
import Box from "@/theme/components/Box";
//HOOKS
import { ButtonCircular } from "../../../components/CustomButtons";
import useCountdown from "../hooks/useCountdown";
import { convertToMinutesSeconds } from "../../../helpers/timeFormater";
import Animated, {
  Easing,
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { setCountdown } from "../../../store/slices/trainingSlice";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Icon from "@/theme/components/Icon";
import Row from "@/theme/components/Row";
const Countdown = () => {
  const { secondsLeft, isTimeOver, start, addTime, skipTime, isPaused } = useCountdown();
  const dispatch = useDispatch();
  const { countdown } = useSelector((state) => state.training);
  const { navigate } = useNavigation();
  const [time, setTime] = useState(countdown.restTime || 30);
  const progress = Math.min((secondsLeft * 100) / time, 100);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress}%`, { duration: 120, easing: Easing.ease }),
    };
  });

  const handleOpenBottomSheetRestTimerConfig = () => {
    navigate("BottomSheetRestTimerConfig", { actualRestTime: countdown.restTime });
  };

  useEffect(() => {
    start(countdown.restTime);
  }, [countdown.restTime]);

  const handleAddTime = (extraTime: number) => {
    setTime((prev) => {
      if (prev + extraTime > 1) {
        return prev + extraTime;
      }
      return 0;
    });
    addTime(extraTime);
  };

  const handlePlay = () => {
    start(time);
  };

  useEffect(() => {
    if (isTimeOver) {
      const timeout = setTimeout(() => {
        dispatch(setCountdown({ state: false, restTime: 0 }));
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isTimeOver]);

  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
      <Box
        width="100%"
        borderWidth={1.5}
        borderColor="secondary500"
        borderRadius="s"
        bg="secondary1000"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={100}
        left={10}
        py="space5"
      >
        {/* <Icon
          name="setting"
          color="secondary400"
          size="size10"
          bg="secondary1000"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          top={-25}
          bottom={7}
          onPress={handleOpenBottomSheetRestTimerConfig}
          position="absolute"
        /> */}
        <FontAwesome
          name="cog"
          size={20}
          color={GRAY_LIGHT_COLOR}
          style={styles.settingsBtn}
          onPress={handleOpenBottomSheetRestTimerConfig}
        />
        <Row width="90%" justifyContent="space-between">
          <ButtonCircular icon={isPaused ? "play" : "pause"} action={handlePlay} size="s" />
          <Text variant="bodyMSecondary" color="secondary400" onPress={() => handleAddTime(-15)}>
            -15
          </Text>
          <Text variant="bodyMSecondary">{convertToMinutesSeconds(secondsLeft)}</Text>
          <Text variant="bodyMSecondary" color="secondary400" onPress={() => handleAddTime(15)}>
            +15
          </Text>
          <ButtonCircular size="s" icon="forward" action={skipTime} />
        </Row>
        <Box width="90%" height={7} bg="background" borderRadius="full" mt="space5">
          <Animated.View style={[styles.progress, animatedWidth]} />
        </Box>
      </Box>
    </Animated.View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  progress: {
    height: 7,
    borderRadius: 5,
    backgroundColor: ORANGE_COLOR,
  },
  settingsBtn: {
    backgroundColor: BOX_COLOR,
    position: "absolute",
    top: -25,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
