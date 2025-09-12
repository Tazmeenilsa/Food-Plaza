import { RootState } from '@/app/redux/store';
import { colors } from '@/theme/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const MyTabBar = ({ state, descriptors, navigation }: any) => {
    const { buildHref } = useLinkBuilder();
    const cartData = useSelector((state: RootState) => state.cart.cartItems)

    const getIconName = (routeName: string) => {
        switch (routeName) {
            case '(home)/index':
                return 'fastfood';
            case '(order)/index':
                return 'category';
            case '(cart)/index':
                return 'shopping-cart';
            case '(profile)/index':
                return 'person';
            default:
                return 'circle';
        }
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                // 🔹 Animation values
                const scaleAnim = useRef(new Animated.Value(isFocused ? 1.2 : 1)).current;
                const opacityAnim = useRef(new Animated.Value(isFocused ? 1 : 0.6)).current;

                useEffect(() => {
                    Animated.spring(scaleAnim, {
                        toValue: isFocused ? 1.2 : 1,
                        useNativeDriver: true,
                    }).start();

                    Animated.timing(opacityAnim, {
                        toValue: isFocused ? 1 : 0.6,
                        duration: 250,
                        useNativeDriver: true,
                    }).start();
                }, [isFocused]);

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <PlatformPressable
                        key={route.key}
                        pressOpacity={1}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            height: 100,
                            backgroundColor: colors.primaryDark,
                            alignItems: 'center',
                            paddingTop: 10,
                        }}
                    >
                        <Animated.View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: isFocused ? -12 : 5,
                                transform: [{ scale: scaleAnim }],
                                opacity: opacityAnim,
                            }}
                        >
                            {isFocused && (
                                <View
                                    style={{
                                        position: 'absolute',
                                        width: 60,
                                        height: 60,
                                        backgroundColor: colors.secondary,
                                        borderRadius: 50,

                                    }}
                                />
                            )}

                            <View>
                                <MaterialIcons
                                    name={getIconName(route.name) as any}
                                    size={24}
                                    color={isFocused ? colors.primary : colors.white}
                                />
                                {route.name === '(cart)/index' && cartData.length > 0 && (
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>
                                            {cartData.length > 9 ? '9+' : cartData.length}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        </Animated.View>
                    </PlatformPressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: -10,
        top: -5,
        backgroundColor: colors.info,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default MyTabBar;