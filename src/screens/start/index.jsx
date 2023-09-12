import React, { useState } from 'react'
import { StyleSheet, ImageBackground, View, Text } from 'react-native'

import { LinearGradient } from "expo-linear-gradient";

import { containerPaddingHorizontal, containerPaddingTop, grayLightColor, orangeColor } from '../../styles/styles'
import { GoogleButton, FacebookButton } from '../../components/Buttons'
import LogoFitway from '../../components/LogoFitway';


export default StartScreen = () => {



    return (
        <ImageBackground source={require("../../assets/images/homeBackground.jpg")} style={{ flex: 1 }}>
            <LinearGradient colors={[
                "rgba(0, 0, 0, 1)",
                "rgba(0, 0, 0, 0.5)",
                "transparent",
                "transparent",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 1)",
            ]}
                style={styles.gradient}>
                <LogoFitway />
                <View style={styles.bottomContainer}>
                    <FacebookButton/>
                    <GoogleButton/>
                    <View>
                        <Text style={styles.privacyGeneral}>By continuing, I agree to</Text>
                        <Text style={[styles.privacyGeneral, { color: orangeColor }]}>Privacy, Policy and Terms of Use</Text>
                    </View>
                </View>


            </LinearGradient>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        paddingHorizontal: containerPaddingHorizontal,
        paddingBottom: '5%',
        paddingTop: '10%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    privacyGeneral: {
        fontSize: 14,
        fontWeight: "400",
        color: grayLightColor,
        textAlign: "center",
    },

    bottomContainer: {
        width: '100%',
        gap: 10
    }
})
