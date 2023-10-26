import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Feather } from "@expo/vector-icons";
import { ORANGE_DARK_COLOR } from "../../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default AddImage = ({ toggleBottomsheet }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const [image, setImage] = useState(null);
  return (
    <TouchableOpacity style={styles.addImageContainer} onPress={toggleBottomsheet}>
      <View style={styles.image}>
        <Feather name="camera" size={30} color={ORANGE_DARK_COLOR} />
      </View>
      <Text style={styles.textAddImage}>Add Image</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: "#545454",
  },

  textAddImage: {
    color: ORANGE_DARK_COLOR,
    marginTop: 10,
  },
});
