import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR, RED_COLOR, WHITE_COLOR } from "../../../styles/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import BackdropModals from "../../../components/BackdropModals";
import { OptionMenu } from "../../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default BottomSheetImage = ({ toggleBottomsheet, workoutId }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  return (
    <>
      <BackdropModals toggleModal={toggleBottomsheet} />
      <Animated.View
        style={styles.bottomSheetContainer}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <View style={styles.optionsContainer}>
          <OptionMenu text={"Pick from gallery"} icon="image" />
          <OptionMenu
            text={"Take a pic"}
            icon="camera"
            action={() => {
              navigate("Camera");
              toggleBottomsheet();
            }}
          />
        </View>
        <OptionMenu text={t("configModal.cancel")} action={toggleBottomsheet} />
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
    zIndex: 20,
    gap: 20,
  },
  optionsContainer: {
    gap: 8,
  },
  option: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
  },
  optionText: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
});
