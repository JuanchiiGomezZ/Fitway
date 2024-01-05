import React from "react";
import { OptionMenu } from "../../../components/CustomButtons";
import * as ImagePicker from "expo-image-picker";
import BottomSheetMenu from "../../../components/BottomSheetMenu";

export default BottomSheetImage = ({ toggleBottomsheet }) => {

  const options = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.75,
  };

  const pickImage = async () => {
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (galleryStatus.status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync(options);

      if (!result.canceled) {
        toggleBottomsheet(result.assets[0].uri);
      }
    } else {
      console.log("Error");
    }
  };

  const openCamera = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraStatus.status == "granted") {
      let result = await ImagePicker.launchCameraAsync(options);
      if (!result.canceled) {
        console.log(result.assets[0].uri);
        toggleBottomsheet(result.assets[0].uri);
      }
    } else {
      console.log("Error");
    }
  };

  return (
    <BottomSheetMenu toggleBottomSheet={() => toggleBottomsheet(null)}>
      <OptionMenu text={"Pick from gallery"} icon="image" action={pickImage} />
      <OptionMenu text={"Take a pic"} icon="camera" action={openCamera} />
    </BottomSheetMenu>
  );
};

