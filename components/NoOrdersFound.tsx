import { colors } from '@/theme/colors'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from './Text'

const NoOrdersFound = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <AntDesign name="shoppingcart" size={80} color={colors.primary} />
            </View>
            <Text variant="h3" fontWeight="medium" style={styles.title}>
                No Orders Found ! 🥲
            </Text>
            <Text variant="caption" style={styles.subtitle}>
                Looks like you haven't ordered anything yet 😞
            </Text>
        </View>
    )
}

export default NoOrdersFound

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',

    },
    iconContainer: {
        backgroundColor: colors.gray200,
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        maxWidth: 300,
        color: colors.gray600
    },
})