import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop } from '../../styles/styles'

export default DiscoverScreen = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Text>Discover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        paddingHorizontal: containerPaddingHorizontal,
        paddingTop: containerPaddingTop,
    },
});



