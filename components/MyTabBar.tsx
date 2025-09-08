import { colors } from '@/theme/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const MyTabBar = ({ state, descriptors, navigation }: any) => {
    const { buildHref } = useLinkBuilder();

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
            {state.routes.map((route:any, index: any) => {
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

                            <MaterialIcons
                                name={getIconName(route.name)}
                                size={28}
                                color={isFocused ? colors.white : colors.divider}
                            />
                        </Animated.View>
                    </PlatformPressable>
                );
            })}
        </View>
    );
};


export default MyTabBar