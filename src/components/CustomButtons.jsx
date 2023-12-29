import { StyleSheet, Text, Image, TouchableOpacity, Pressable, View } from "react-native";
import React from "react";
import {
  WHITE_COLOR,
  ORANGE_COLOR,
  GRAY_COLOR,
  BACKGROUND_COLOR,
  GRAY_LIGHT_COLOR,
  GRAY_DARK_COLOR,
} from "../styles/styles";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons, FontAwesome5, Feather } from "@expo/vector-icons";

const ButtonLong = ({
  children,
  short,
  bgColor,
  action,
  transparent,
  disabled,
  actionDisabled,
  borderColor,
}) => {
  const Container = disabled ? Pressable : TouchableOpacity;
  return (
    <Container
      style={[
        styles.row,
        styles.buttonLong,
        { backgroundColor: bgColor || ORANGE_COLOR },
        short && styles.buttonLongSmall,
        transparent && styles.buttonTransparent,
        disabled && { backgroundColor: "#363636" },
        borderColor && transparent && { borderColor: borderColor },
        disabled && transparent && styles.buttonTransparentDisabled,
      ]}
      onPress={!disabled ? action : actionDisabled}
    >
      {children}
    </Container>
  );
};

const TextButton = ({ text, color, disabled, textWeight }) => {
  return (
    <Text
      style={[
        styles.textButton,
        { color: color || WHITE_COLOR },
        disabled && { color: GRAY_LIGHT_COLOR },
        textWeight && { fontWeight: textWeight },
      ]}
      ellipsizeMode="tail"
      numberOfLines={1}
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
  actionDisabled,
  textWeight,
  borderColor,
}) => {
  return (
    <ButtonLong
      action={action}
      bgColor={bgColor}
      transparent={transparent}
      disabled={disabled}
      short={short}
      actionDisabled={actionDisabled}
      borderColor={borderColor}
    >
      <TextButton text={text} color={color} disabled={disabled} textWeight={textWeight} />
    </ButtonLong>
  );
};

export const ButtonRounded = ({
  bgColor,
  action,
  transparent,
  disabled,
  text,
  color,
  icon,
  textWeight,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.row,
        styles.buttonRounded,
        { backgroundColor: bgColor || ORANGE_COLOR },
        transparent && styles.buttonTransparent,
        disabled && { backgroundColor: "#363636" },
        !icon && { paddingLeft: 7 },
      ]}
      onPress={action}
    >
      {icon && <MaterialCommunityIcons name={icon} size={20} color={color ? color : WHITE_COLOR} />}
      <TextButton text={text} color={color} textWeight={textWeight} />
    </TouchableOpacity>
  );
};

export const ButtonCircular = ({
  bgColor,
  action,
  color,
  icon,
  size,
  text,
  disabled,
  iconFamily,
  iconSize,
  actionDisabled,
}) => {
  const Icon = iconFamily || FontAwesome5;
  const Container = disabled ? Pressable : TouchableOpacity;

  // size = l(50), m(40), s(30)
  const sizeSelector = () => {
    const sizes = {
      l: { height: 45, width: 45 },
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
    <Container style={buttonStyles} onPress={!disabled ? action : actionDisabled}>
      {icon ? (
        <Icon
          name={icon}
          size={iconSize || sizeSelector().width - 15}
          color={color ? color : WHITE_COLOR}
          style={[icon == "play" && { marginLeft: 4 }, disabled && { color: GRAY_LIGHT_COLOR }]}
        />
      ) : (
        <TextButton text={text} />
      )}
    </Container>
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
      <MaterialCommunityIcons name={icon} size={20} color={disabled ? GRAY_COLOR : WHITE_COLOR} />
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
    height: 40,
    paddingLeft: 4,
    paddingRight: 7,
    gap: 1,
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

  textBold: {
    fontWeight: "700",
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
