import { StyleSheet, Text, Image, TouchableOpacity, Pressable, View } from "react-native";
import React from "react";
import {
  WHITE_COLOR,
  ORANGE_COLOR,
  GRAY_COLOR,
  RED_COLOR,
  BACKGROUND_COLOR,
  GRAY_LIGHT_COLOR,
  GRAY_DARK_COLOR,
} from "../styles/styles";
import { useTranslation } from "react-i18next";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const ButtonLong = ({ children, short, bgColor, action, transparent, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.row,
        styles.buttonLong,
        { backgroundColor: bgColor ? bgColor : ORANGE_COLOR },
        short && styles.buttonLongSmall,
        transparent && styles.buttonTransparent,
        disabled && { backgroundColor: "#363636" },
        disabled && transparent && styles.buttonTransparentDisabled,
      ]}
      onPress={action ? action : () => {}}
    >
      {children}
    </TouchableOpacity>
  );
};

const TextButton = ({ text, color, disabled }) => {
  return (
    <Text
      style={[
        styles.textButton,
        { color: color ? color : WHITE_COLOR },
        disabled && { color: GRAY_LIGHT_COLOR },
      ]}
    >
      {text}
    </Text>
  );
};

export const ButtonGoogle = ({ action }) => {
  const { t } = useTranslation();
  return (
    <ButtonLong bgColor={WHITE_COLOR} action={action}>
      <Image source={require("../assets/images/googleIcon.png")} style={styles.iconImg} />
      <TextButton text={`${t("continue-with")} Google`} color="black" />
    </ButtonLong>
  );
};

export const ButtonFacebook = ({ action }) => {
  const { t } = useTranslation();
  return (
    <ButtonLong bgColor="#1877f2" action={action}>
      <Image source={require("../assets/images/facebookIcon.png")} style={styles.icomImg} />
      <TextButton text={`${t("continue-with")} Facebook`} color="#1877f2" />
    </ButtonLong>
  );
};

export const ButtonClassicLong = ({
  action,
  bgColor,
  color,
  text,
  transparent,
  disabled,
  short,
}) => {
  return (
    <ButtonLong
      action={action}
      bgColor={bgColor}
      transparent={transparent}
      disabled={disabled}
      short={short}
    >
      <TextButton text={text} color={color} disabled={disabled} />
    </ButtonLong>
  );
};

export const ButtonRounded = ({ bgColor, action, transparent, disabled, text, color, icon }) => {
  return (
    <TouchableOpacity
      style={[
        styles.row,
        styles.buttonRounded,
        { backgroundColor: bgColor ? bgColor : ORANGE_COLOR },
        transparent && styles.buttonTransparent,
        disabled && { backgroundColor: "#363636" },
      ]}
      onPress={action}
    >
      {icon && <MaterialCommunityIcons name={icon} size={20} color={color ? color : WHITE_COLOR} />}
      <TextButton text={text} color={color} />
    </TouchableOpacity>
  );
};

export const ButtonCircular = ({ bgColor, action, color, icon, size, text, disabled }) => {
  const Icon = icon == "close" ? FontAwesome : FontAwesome5;

  // size = l(50), m(40), s(30)
  const sizeSelector = () => {
    const sizes = {
      l: { height: 50, width: 50 },
      m: { height: 40, width: 40 },
      s: { height: 30, width: 30 },
    };
    return sizes[size] || sizes.l;
  };

  const buttonStyles = [
    styles.row,
    { backgroundColor: bgColor || ORANGE_COLOR },
    disabled && { backgroundColor: GRAY_DARK_COLOR },
    sizeSelector(),
    { borderRadius: 50 },
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={action}>
      {icon ? (
        <Icon
          name={icon}
          size={25}
          color={color ? color : WHITE_COLOR}
          style={(icon == "play" && { marginLeft: 5 }, disabled && { color: GRAY_LIGHT_COLOR })}
        />
      ) : (
        <TextButton text={text} />
      )}
    </TouchableOpacity>
  );
};

export const OptionMenu = ({ action, icon, color, text }) => {
  return (
    <TouchableOpacity
      style={[
        styles.row,
        styles.buttonLong,
        { backgroundColor: BACKGROUND_COLOR, borderRadius: 10 },
      ]}
      onPress={action}
    >
      {icon && <Feather name={icon} size={22} color={color || WHITE_COLOR} />}
      <Text style={[styles.textButton, { color: color || WHITE_COLOR }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ConfigButton = ({ action }) => {
  return (
    <TouchableOpacity style={styles.buttonConfig} onPress={action}>
      <Feather name="more-vertical" size={24} color={GRAY_COLOR} />
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
export const ButtonShortIndex = ({ action, icon, text, disabled }) => {
  const Container = disabled ? View : TouchableOpacity;

  return (
    <Container
      style={[styles.row, styles.buttonShortIndex, disabled && { borderColor: GRAY_COLOR }]}
      onPress={action}
    >
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={disabled ? GRAY_COLOR : WHITE_COLOR}
      />
      <TextButton text={text} color={disabled && GRAY_COLOR} />
    </Container>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  buttonLong: {
    width: "100%",
    borderRadius: 5,
    height: 45,
  },

  buttonRounded: {
    borderRadius: 40,
    height: 45,
    paddingLeft: 4,
    paddingRight: 7,
  },

  buttonLongSmall: {
    height: 35,
  },

  buttonTransparent: {
    backgroundColor: '"rgba(0,0,0,0.0)"',
    borderColor: WHITE_COLOR,
    borderWidth: 1,
  },
  buttonTransparentDisabled: {
    backgroundColor: '"rgba(0,0,0,0.0)"',
    borderColor: GRAY_DARK_COLOR,
    borderWidth: 1,
  },

  textButton: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontWeight: "500",
  },

  iconImg: {
    width: 22,
    height: 22,
  },

  buttonConfig: {
    position: "absolute",
    top: 7,
    right: 3,
    zIndex: 2,
  },

  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  buttonShortIndex: {
    borderColor: ORANGE_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "48%",
  },
});
