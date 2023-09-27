import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";

//COMPONENTS
import Countdown from "./components/Countdown";
import Timer from "./components/Timer";

//STYLES
import { BACKGROUND_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from "../../styles/styles";

export default TrainingMode = () => {
  const { t } = useTranslation();
  const [countdown, setCountdown] = useState(false);

  const toggleCountodwn = () => {
    setCountdown((prev) => !prev);
  };


  return (
    <View style={styles.container}>
      <Button title="Countdown" onPress={toggleCountodwn} />
      <Timer/>
      {countdown && <Countdown toggleModal={toggleCountodwn} restTime={30} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
  },
});
