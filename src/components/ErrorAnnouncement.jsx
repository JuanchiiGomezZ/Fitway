import React from "react";
import { Text, View } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { ButtonClassicLong } from "./CustomButtons";

import { useNavigation } from "@react-navigation/native";
import { PADDING_TOP } from "../styles/styles";
import Header from "./Header";

export default ErrorAnnouncement = () => {
  const { t } = useTranslation();

  const { navigate } = useNavigation();

  return (
    <>
      <Header style={{ position: "absolute", top: PADDING_TOP, left: 10 }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 25 }}>
        <View style={{ gap: 2 }}>
          <Text style={{ color: "white", fontWeight: "800", fontSize: 20, textAlign: "center" }}>
            Network Error
          </Text>
          <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>
            We're unable to complete your request. Please try again in a few minutes. If this
            problem continues, please contact support.
          </Text>
        </View>
        <ButtonClassicLong
          text={"Back"}
          action={() => {
            navigate("TabNavigation", { screen: "Home" });
          }}
        />
      </View>
    </>
  );
};
