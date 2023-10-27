import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

//HOOKS
import { useTranslation } from "react-i18next";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import { CameraButton } from "../../../components/Buttons";

//STYLES
import { PADDING_TOP } from "../../../styles/styles";
import { Entypo } from "@expo/vector-icons";

export default CameraScreen = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();
  const [hasCameraPermission, setHasCammeraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      //MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCammeraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  if (hasCameraPermission == false) {
    goBack();
    return;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
       // await MediaLibrary.createAssetAsync(image);
        setImage(null);
        goBack();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const retakePicture = () => {
    setImage(null);
  };

  const toggleFlash = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off,
    );
  };

  const toggleType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };

  return (
    <View style={styles.container}>
      {!image ? (
        <>
          <View style={styles.cameraTools}>
            <Entypo
              name="retweet"
              size={28}
              color="white"
              onPress={toggleType}
            />
            <Entypo
              name="flash"
              size={28}
              color={flash === Camera.Constants.FlashMode.on ? "white" : "gray"}
              onPress={toggleFlash}
            />
          </View>
          <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef} />
          <CameraButton action={takePicture} text="Take a picture" icon="camera" />
        </>
      ) : (
        <>
          <Image source={{ uri: image }} style={styles.camera} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 60 }}
          >
            <CameraButton text="Re-take" icon="retweet" action={retakePicture} />
            <CameraButton text="Save" icon="check" action={savePicture} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    paddingTop: PADDING_TOP + 50,
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
  },
  cameraTools: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    position: "absolute",
    top: 52,
    zIndex: 10,
    left: "5%",
  },
});
