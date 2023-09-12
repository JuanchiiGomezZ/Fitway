import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default ProfileScreen = () => {
    const { t } = useTranslation();
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{t('change-language')}</Text>
        </View>
    )
}


const styles = StyleSheet.create({})