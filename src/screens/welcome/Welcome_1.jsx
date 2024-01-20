import React from "react";
import { StyleSheet, View } from "react-native";

/* HOOKS & HELPERS */
import { useNavigation } from "@react-navigation/native";

/* COMPONENTS */
import { ButtonClassicLong } from "../../components/CustomButtons";
import LogoFitway from "../../components/LogoFitway";
import { PADDING_HORIZONTAL, GRAY_COLOR, PADDING_BOTTOM, WHITE_COLOR } from "../../styles/styles";
import Feature from "./components/Feature";

export default Welcome_1 = () => {
  const { navigate } = useNavigation();
  return (
    <WelcomeBackground image={"../../assets/images/welcome_1.jpg"}>
      <LogoFitway />
      <View style={styles.bottomContainer}>
        <Feature
          title={"Create custom routines"}
          text={
            "Design your own routines based on your goals and preferences. You can structure your training plan to reach your fitness targets."
          }
        />
        <ButtonClassicLong text="Continue" action={() => navigate("Welcome_2")} />
      </View>
    </WelcomeBackground>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: PADDING_BOTTOM,
    paddingTop: "10%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  privacyGeneral: {
    fontSize: 14,
    fontWeight: "400",
    color: GRAY_COLOR,
    textAlign: "center",
  },

  bottomContainer: {
    width: "100%",
    gap: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: WHITE_COLOR,
    marginBottom: 3,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: GRAY_COLOR,
  },
});
