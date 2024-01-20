import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { Feather } from "@expo/vector-icons";
import { GRAY_COLOR, ORANGE_DARK_COLOR } from "../../../styles/styles";
import { use } from "i18next";
import { useNavigation } from "@react-navigation/native";

export default AddImage = ({ image }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity style={styles.addImageContainer} onPress={() => navigate("BottomSheetImage")}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.image}>
          <Feather name="camera" size={30} color={ORANGE_DARK_COLOR} />
        </View>
      )}
      <Text style={styles.textAddImage}>Add Image</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addImageContainer: {
    alignItems: "center",
    marginTop: 20,
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
    color: GRAY_COLOR,
    marginTop: 8,
  },
});
