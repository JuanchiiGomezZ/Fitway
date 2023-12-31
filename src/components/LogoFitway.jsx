import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from "expo-font";
import { whiteColor } from '../styles/styles';

export default LogoFitway = () => {
    const [fontsLoaded] = useFonts({
        Fugaz: require("../assets/fonts/Fugaz.ttf"),
    });

    if (!fontsLoaded) return null;
    return <Text style={styles.logo}>FITWAY</Text>

}

const styles = StyleSheet.create({
    logo: {
        fontSize: 50,
        fontWeight: "400",
        color: whiteColor,
        fontFamily: "Fugaz",
        marginTop: 15,
    },
});
