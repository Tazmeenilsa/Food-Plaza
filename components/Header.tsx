import { colors } from '@/theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

type AntDesignName = React.ComponentProps<typeof AntDesign>['name'];

interface HeaderProps {
    header1?: boolean;
    header2?: boolean;
    title?: string;
    iconName?: AntDesignName;
}

const Header: React.FC<HeaderProps> = ({ header1, header2, title, iconName }) => {
    const navigate = useNavigation()
    return (
        <>
            <StatusBar hidden />
            <View style={styles.header}>
                {header1 &&
                    <>
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
                    </>
                }
                {header2 &&
                    <View style={[styles.headerContent, {
                        borderBottomWidth: 1,
                        borderColor: colors.gray400,
                        paddingBottom: 5,
                        justifyContent: 'space-between'
                    }]}>
                        <TouchableOpacity style={styles.backButton}>
                            <AntDesign name="arrowleft"
                                onPress={() => navigate.goBack()}
                                size={24} color={colors.primary} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name={iconName}

                                size={24} color={colors.secondaryDark} style={{ marginRight: 8 }} />
                            <Text variant="h3" fontWeight="semiBold" style={{ color: colors.secondaryDark }}>
                                {title}

                            </Text>
                        </View>
                        <View style={{ width: 40 }} />
                    </View>
                }
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
    sloganView: {
        padding: 15
    },
    backButton: {
        padding: 8,
        marginLeft: -8
    }
})