import React from "react";
import { StyleSheet, View } from "react-native";

/* HOOKS & HELPERS */
import { useNavigation } from "@react-navigation/native";
import { MMKV } from "react-native-mmkv";

/* COMPONENTS */
import { ButtonClassicLong } from "../../components/CustomButtons";
import LogoFitway from "../../components/LogoFitway";
import { PADDING_HORIZONTAL, GRAY_COLOR, PADDING_BOTTOM, WHITE_COLOR } from "../../styles/styles";
import WelcomeBackground from "./components/WelcomeBackground";
import Feature from "./components/Feature";
import { welcomeStorage } from "../../helpers/storage";

export default Welcome_2 = () => {
  const { navigate } = useNavigation();
  
  const handleGetStarted = () => {
    welcomeStorage.set("welcome", true);
    navigate("StartScreen");
  };
  return (
    <WelcomeBackground image={"../../assets/images/welcome_2.jpg"}>
      <LogoFitway />
      <View style={styles.bottomContainer}>
        <Feature
          title={"Training assistant"}
          text={
            "Custom gym assistant for guided workouts. Choose your daily routine, and I'll track your training along with detailed progress updates."
          }
        />
        <ButtonClassicLong text="Get Started" action={handleGetStarted} />
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
