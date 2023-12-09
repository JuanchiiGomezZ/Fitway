import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import BackdropModals from "./BackdropModals";
import { OptionMenu } from "./CustomButtons";

export default BottomSheetMenu = ({ children, toggleBottomSheet }) => {
  const { t } = useTranslation();

  return (
    <>
      <BackdropModals toggleModal={() => toggleBottomSheet(null)} />
      <Animated.View
        style={styles.bottomSheetContainer}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <View style={styles.optionsContainer}>{children}</View>
        <OptionMenu text={t("configModal.cancel")} action={() => toggleBottomSheet(null)} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: "absolute",
    bottom: 10,
    left: "5%",
    width: "100%",
    zIndex: 5,
    gap: 20,
  },
  optionsContainer: {
    gap: 8,
  },
});
