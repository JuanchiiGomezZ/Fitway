import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { backgroundColor, containerPaddingHorizontal, containerPaddingTop } from '../../styles/styles'



export default HomeScreen = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>{t('change-language')}</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        paddingHorizontal: containerPaddingHorizontal,
        paddingTop: containerPaddingTop
    },
});