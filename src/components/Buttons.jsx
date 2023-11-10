import { StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import {
  WHITE_COLOR,
  ORANGE_COLOR,
  GRAY_COLOR,
  RED_COLOR,
  BACKGROUND_COLOR,
} from "../styles/styles";
import { useTranslation } from "react-i18next";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Feather,
  Entypo,
} from "@expo/vector-icons";

export const GoogleButton = ({ action }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={action}>
      <Image source={require("../assets/images/googleIcon.png")} style={styles.icon} />
      <Text style={{ fontWeight: "600" }}>{t("continue-with")} Google</Text>
    </TouchableOpacity>
  );
};

export const FacebookButton = ({ action }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={[styles.button, styles.googleButton, { backgroundColor: "#1877f2" }]}
      onPress={action}
    >
      <Image source={require("../assets/images/facebookIcon.png")} style={styles.icon} />
      <Text style={{ fontWeight: "600", color: WHITE_COLOR }}>{t("continue-with")} Facebook</Text>
    </TouchableOpacity>
  );
};

export const TransparentButton = ({ action, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.transparentButton]} onPress={action}>
      <MaterialCommunityIcons name={icon} size={20} color={WHITE_COLOR} />
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};
export const TransparentButtonRounded = ({ action, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.transparentBtnRounded]} onPress={action}>
      <MaterialCommunityIcons name={icon} size={20} color={WHITE_COLOR} />
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const OrangeButtonRounded = ({ action, icon, text }) => {
  return (
    <TouchableOpacity
      style={[styles.transparentBtnRounded, { backgroundColor: ORANGE_COLOR }]}
      onPress={action}
    >
      <MaterialCommunityIcons name={icon} size={20} color={WHITE_COLOR} />
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const OrangeButtonSmall = ({ action, text }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.OrangeButtonSmall]} onPress={action}>
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};
export const WhiteButtonSmall = ({ action, text }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.OrangeButtonSmall, { backgroundColor: WHITE_COLOR }]}
      onPress={action}
    >
      <Text style={[styles.OrangeButtonSmallText, { color: ORANGE_COLOR }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const DisabledButtonSmall = ({ action, text }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.OrangeButtonSmall, { backgroundColor: "grey" }]}
      onPress={action}
    >
      <Text style={styles.OrangeButtonSmallText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const OrangeButton = ({ action, text }) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={action}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
export const DisabledButton = ({ action, text }) => {
  return (
    <Pressable style={[styles.button, { backgroundColor: "#5b5b5b" }]} onPress={action}>
      <Text style={[styles.textButton, { color: "#e3e3e3" }]}>{text}</Text>
    </Pressable>
  );
};
export const OrangeButtonLarge = ({ action, text }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.largeButton]} onPress={action}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export const CloseModalIcon = ({ action }) => {
  return (
    <TouchableOpacity style={styles.closeIcon} onPress={action}>
      <MaterialCommunityIcons name="close-thick" color={GRAY_COLOR} size={16} />
    </TouchableOpacity>
  );
};

export const OrangeCircularButton = ({ action, icon }) => {
  return (
    <TouchableOpacity style={styles.circularButton} onPress={action}>
      <FontAwesome5
        name={icon}
        size={25}
        color="white"
        style={icon == "play" && { marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
};
export const GrayCircularButton = ({ action, icon, text }) => {
  return (
    <TouchableOpacity style={[styles.circularButton, styles.grayCircularButton]} onPress={action}>
      {text ? (
        <Text style={styles.textButton}>{text}</Text>
      ) : (
        <FontAwesome5 name={icon} size={20} color="white" />
      )}
    </TouchableOpacity>
  );
};

export const CircularButtonSmall = ({ action, icon, color }) => {
  const Icon = icon == "close" ? FontAwesome : FontAwesome5;
  return (
    <TouchableOpacity
      style={[styles.circularButton, { backgroundColor: color, width: 40, height: 40 }]}
      onPress={action}
    >
      <Icon name={icon} size={25} color="white" style={icon == "play" && { marginLeft: 5 }} />
    </TouchableOpacity>
  );
};
export const OptionMenu = ({ action, icon, color, text }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={action}>
      {icon && <Feather name={icon} size={24} color={color || WHITE_COLOR} />}
      <Text style={[styles.optionText, { color: color || WHITE_COLOR }]}>{text}</Text>
    </TouchableOpacity>
  );
};
export const ConfigButton = ({ action }) => {
  return (
    <TouchableOpacity style={styles.config} onPress={action}>
      <Feather name="more-vertical" size={24} color={GRAY_COLOR} />
    </TouchableOpacity>
  );
};

export const CameraButton = ({ action, icon, text }) => {
  return (
    <TouchableOpacity style={styles.pictureButton} onPress={action}>
      <Text style={styles.textButton}>{text}</Text>
      <Entypo name={icon} size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: ORANGE_COLOR,
    fontSize: 18,
  },

  textButton: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: "500",
  },

  googleButton: {
    backgroundColor: WHITE_COLOR,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 22,
    height: 22,
  },

  transparentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "48%",
    gap: 7,
  },

  transparentBtnRounded: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  OrangeButtonSmall: {
    backgroundColor: ORANGE_COLOR,
    height: 35,
  },
  OrangeButtonSmallText: {
    color: WHITE_COLOR,
    fontSize: 14,
    fontWeight: "500",
  },

  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  largeButton: {
    width: "110%",
    position: "relative",
    left: "-5%",
    height: 50,
    bottom: 1,
    borderRadius: 0,
  },

  circularButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ORANGE_COLOR,
  },
  grayCircularButton: {
    width: 40,
    height: 40,
    backgroundColor: GRAY_COLOR,
  },

  option: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
  },
  optionText: {
    color: WHITE_COLOR,
    fontSize: 18,
  },
  config: {
    position: "absolute",
    top: 10,
    right: 5,
    zIndex: 2,
  },

  pictureButton: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
  },
});
