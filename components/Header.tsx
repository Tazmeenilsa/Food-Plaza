import { colors } from '@/theme/colors';
import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

const Header = () => {
    return (
        <>
            <StatusBar hidden />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                    <Text variant="h4" fontWeight="semiBold" style={{ color: colors.primary }}>Hi, John!</Text>
                </View>
                <View style={styles.sloganView}>
                    <Text variant="h1" fontWeight="bold" style={{ letterSpacing: 1.5, marginBottom: 8 }}>
                        Find your best food
                    </Text>
                    <Text variant="h3" fontWeight="medium" style={{ letterSpacing: 1 }}>
                        Order & Eat. 😎
                    </Text>

                </View>
            </View>
        </>
    )
}

export default Header
const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 15,
        borderRadius: 20,
        overflow: 'hidden',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    sloganView:{
        padding:15
    }
})