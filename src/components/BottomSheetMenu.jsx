import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import BackdropModals from "./BackdropModals";
import { OptionMenu } from "./CustomButtons";
import { useNavigation } from "@react-navigation/native";

export default BottomSheetMenu = ({ children }) => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();
  return (
    <>
      <BackdropModals toggleModal={goBack} />
      <Animated.View
        style={styles.bottomSheetContainer}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <View style={styles.optionsContainer}>{children}</View>
        <OptionMenu text={t("configModal.cancel")} action={goBack} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: "absolute",
    bottom: 20,
    left: "5%",
    width: "90%",
    zIndex: 5,
    gap: 20,
  },
  optionsContainer: {
    gap: 8,
  },
});
