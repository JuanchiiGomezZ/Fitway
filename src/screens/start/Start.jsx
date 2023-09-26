import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";

/* HOOKS & HELPERS */
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { storage } from "../../helpers/storage";

/* COMPONENTS */
import { GoogleButton, FacebookButton, OrangeButton } from "../../components/Buttons";
import LogoFitway from "../../components/LogoFitway";
import Loader from "../../components/Loader";
import useAuthStore from "../../hooks/redux/useAuthStore";

import { PADDING_HORIZONTAL, GRAY_COLOR, ORANGE_COLOR } from "../../styles/styles";
export default StartScreen = () => {
  const { signIn, signOut } = useAuthStore();
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ImageBackground source={require("../../assets/images/homeBackground.jpg")} style={{ flex: 1 }}>
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 1)",
              "rgba(0, 0, 0, 0.5)",
              "transparent",
              "transparent",
              "rgba(0, 0, 0, 0.5)",
              "rgba(0, 0, 0, 1)",
            ]}
            style={styles.gradient}
          >
            <LogoFitway />
            <View style={styles.bottomContainer}>
              <OrangeButton
                text={"Login"}
                task={() => {
                  console.log(storage.getString("token"));
                }}
              />
              {/*<FacebookButton /> */}
              <GoogleButton task={signIn} />
              <View>
                <Text style={styles.privacyGeneral}>By continuing, I agree to</Text>
                <Text style={[styles.privacyGeneral, { color: ORANGE_COLOR }]}>Privacy, Policy and Terms of Use</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: "5%",
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
    gap: 10,
  },
});
