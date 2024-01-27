import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../../styles/styles";
import TitleScreen from "../../../components/TitleScreen";
import { ButtonShortIndex } from "../../../components/CustomButtons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default HeaderHome = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { activeRoutineDetails, activeRoutineId } = useSelector((state) => state.userRoutines);

  return (
    <View style={styles.head}>
      <View style={styles.title}>
        <View>
          <TitleScreen title={t("Home.title")} />
          <Text style={styles.routineName}>
            {activeRoutineDetails && activeRoutineDetails.name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => navigate("QrModal", { code: activeRoutineDetails.codeShare })}
        >
          <Feather name="share" size={24} color={WHITE_COLOR} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonShortIndex
          text={t("Home.new-workout")}
          icon={"clipboard-text"}
          action={() =>
            navigate("NewWorkoutModal", {
              action: () => {
                console.log("first");
              },
            })
          }
          disabled={!activeRoutineId}
        />
        <ButtonShortIndex
          text={t("Home.my-routines")}
          icon={"bookmark"}
          action={() => navigate("MyRoutines")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 170,
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  routineName: {
    color: GRAY_COLOR,
    fontSize: 18,
    fontWeight: "600",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  shareButton: {
    backgroundColor: ORANGE_COLOR,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },
});
