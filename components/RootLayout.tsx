import { colors } from '@/theme/colors';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from './Header';

interface RootLayoutProps {
    children: React.ReactNode;
    homeheader?: boolean;
    commonHeader?: boolean;
    scrollableContent?: boolean;
    title?: string
    iconName?: string
}

const RootLayout = ({ children, homeheader, commonHeader, title, iconName }: RootLayoutProps) => {
    return (
        <SafeAreaView style={styles.container}>
            {homeheader && <Header header1={true} />}
            {commonHeader && <Header header2={true} title={title} iconName={iconName} />}

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    content: {
        marginHorizontal: 20,
    },
})