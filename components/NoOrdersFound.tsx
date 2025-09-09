import { colors } from '@/theme/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from './Text'

const NoOrdersFound = ({ status }: { status: string }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialIcons name="receipt" size={48} color={colors.primary} />
            </View>
            <Text variant="h4" fontWeight="medium" style={styles.title}>
                No {status} Orders Found ! 🥲
            </Text>
            
        </View>
    )
}

export default NoOrdersFound

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
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
        color:colors.gray600
    },
    subtitle: {
        textAlign: 'center',
        maxWidth: 300,
        color: colors.gray600
    },
})