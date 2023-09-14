import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

/* HOOKS */
import { useTranslation } from 'react-i18next'

/* COMPONENTS */
import InfoContainer from './components/InfoContainer';
import ProfileOption from './components/ProfileOption';

/* STYLES */
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop, grayLightColor, orangeColor, whiteColor } from '../../styles/styles'



export default ProfileScreen = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.background}>
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.profileImage}
                        src={"https://www.si.com/.image/t_share/MTk0NTM2MzQyMzg5MDA3OTgy/imago1020532436h.jpg"}
                    />
                </View>

                <Text style={styles.name}>Juan Manuel Gomez Omil</Text>

                <InfoContainer weight={60} height={180} />

                <View style={styles.optionsContainer}>
                    <ProfileOption
                        optionName={t("measurements")}
                        iconType={"Ionicons"}
                        iconName={"body"}
                        showArrow={true}
                    />
                    <ProfileOption
                        optionName={t("my-exercises")}
                        iconType={"FontAwesome5"}
                        iconName={"clipboard-list"}
                        showArrow={true}
                    />
                    <ProfileOption
                        optionName={t("settings")}
                        iconType={"FontAwesome"}
                        iconName={"gear"}
                        showArrow={true}
                    />
                    <ProfileOption
                        optionName={t("log-out")}
                        iconType={"Feather"}
                        iconName={"log-out"}
                        showArrow={false}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: { flex: 1, backgroundColor: orangeColor, justifyContent: "flex-end" },
    container: {
        backgroundColor: backgroundColor,
        height: "84%",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: "center",
        paddingHorizontal: containerPaddingHorizontal,
    },
    imageContainer: {
        width: 110,
        height: 110,
        borderRadius: 110,
        position: "absolute",
        top: "-7.9%",
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        width: 103,
        height: 103,
        borderRadius: 103,
    },
    name: {
        color: whiteColor,
        fontSize: 18,
        fontWeight: "600",
        marginTop: 70,
        marginBottom: 30,
    },
    optionsContainer: {
        width: "100%",
        paddingVertical: 10,
        gap: 10,
        marginTop: 40,
    },
    completeDataContainer: {
        position: "absolute",
        right: 25,
        top: 20,
    },
});
