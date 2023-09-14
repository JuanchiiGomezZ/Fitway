import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { grayLightColor, whiteColor } from '../../../styles/styles'
import ageCalculator from '../helper/ageCalculator'

export default InfoContainer = ({ weight, height, birthdate }) => {
    const { t } = useTranslation()
    const age = ageCalculator(birthdate)
    return (
        <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{t("weight")}</Text>
                <Text style={styles.infoValue}>{weight}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{t("height")}</Text>
                <Text style={styles.infoValue}>{height}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoItem}>
                <Text style={styles.infoTitle}>{t("age")}</Text>
                <Text style={styles.infoValue}>{"-"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: "rgba(146, 146,146, 0.33)",
        flexDirection: "row",
        paddingVertical: 10,
        borderRadius: 10,
    },
    infoItem: {
        alignItems: "center",
        flex: 1,
    },
    infoTitle: {
        color: grayLightColor,
        fontWeight: "500",
    },
    infoValue: {
        color: whiteColor,
        fontWeight: "500",
    },
    line: {
        height: "100%",
        width: 1,
        backgroundColor: "#929292",
    },
});
