import MyTabBar from '@/components/MyTabBar';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {

    return (
        <Tabs
            safeAreaInsets={{ bottom: 40, }}
            screenOptions={{
                animation: 'shift',
                tabBarShowLabel: false,
                tabBarStyle: { opacity: 1 },
                headerShown: false
            }}
            tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tabs.Screen
                name="(home)/index"

            />
            <Tabs.Screen
                name="(cart)/index"

            />
            <Tabs.Screen
                name="(order)/index"

            />
            <Tabs.Screen
                name="(profile)/index"

            />

        </Tabs>
    );
};

export default TabLayout;