import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

/* HOOKS */
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../helpers/storage";
import useAuthStore from "../../hooks/redux/useAuthStore";
import { useSelector } from "react-redux";

/* COMPONENTS */
import InfoContainer from "./components/InfoContainer";
import ProfileOption from "./components/ProfileOption";

/* STYLES */
import {
  BACKGROUND_COLOR,
  PADDING_HORIZONTAL,
  GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../styles/styles";

export default ProfileScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { signOut } = useAuthStore();
  const { user } = useSelector((state) => state.auth);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            src={"https://www.si.com/.image/t_share/MTk0NTM2MzQyMzg5MDA3OTgy/imago1020532436h.jpg"}
          />
        </View>
        <View style={styles.namesContainer}>
          <Text style={styles.name}>Juan Manuel Gomez Omil</Text>
          <Text style={styles.username}>Juanchii</Text>
        </View>

        <InfoContainer weight={60} height={180} />

        <View style={styles.optionsContainer}>
          <ProfileOption
            optionName={t("Profile.measurements")}
            iconType={"Ionicons"}
            iconName={"body"}
            showArrow={true}
            action={() => {
              console.log(user.id);
            }}
          />
          <ProfileOption
            optionName={t("Profile.my-exercises")}
            iconType={"FontAwesome5"}
            iconName={"clipboard-list"}
            showArrow={true}
          />
          <ProfileOption
            optionName={t("Profile.settings")}
            iconType={"FontAwesome"}
            iconName={"gear"}
            showArrow={true}
            action={() => navigation.navigate("Settings")}
          />
          <ProfileOption
            optionName={t("Profile.log-out")}
            iconType={"Feather"}
            iconName={"log-out"}
            showArrow={false}
            action={signOut}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: ORANGE_COLOR, justifyContent: "flex-end" },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    height: "84%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  imageContainer: {
    width: 110,
    height: 110,
    borderRadius: 110,
    position: "absolute",
    top: "-7.9%",
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 103,
    height: 103,
    borderRadius: 103,
  },
  name: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 70,
  },
  username: {
    color: GRAY_COLOR,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
  },
  optionsContainer: {
    width: "100%",
    paddingVertical: 10,
    gap: 10,
    marginTop: 40,
  },
  completeDataContainer: {
    position: "absolute",
    right: 25,
    top: 20,
  },
  namesContainer: {
    marginBottom: 15,
  },
});
