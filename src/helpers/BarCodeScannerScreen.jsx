import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AntDesign } from "@expo/vector-icons";

const Scanner = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    navigation.navigate("AllRoutines", { qrQuery: data });
  };

  if (hasPermission === null) {
    return <View style={styles.container} />;
  }
  if (hasPermission === false) {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.borderContainer}>
        <View style={styles.borderTopContainer}>
          <View style={styles.border}></View>
          <View style={[styles.border, { transform: [{ rotate: "90deg" }] }]}></View>
        </View>
        <View style={styles.borderBottomContainer}>
          <View style={[styles.border, { transform: [{ rotate: "270deg" }] }]}></View>
          <View style={[styles.border, { transform: [{ rotate: "180deg" }] }]}></View>
        </View>
      </View>
      <TouchableOpacity style={{ position: "absolute", bottom: "10%" }}>
        <AntDesign name="closecircle" size={50} color="grey" onPress={() => navigation.goBack()} />
      </TouchableOpacity>
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
  },
  focusImage: {
    width: 300,
    height: 300,
  },
  border: {
    width: 100,
    height: 100,
    borderLeftColor: "white",
    borderTopColor: "white",
    borderWidth: 7,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  borderContainer: {
    width: "70%",
    height: "35%",
    justifyContent: "space-between",
  },
  borderTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  borderBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
