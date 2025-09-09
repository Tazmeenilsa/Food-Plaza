import { Category } from '@/app/(tabs)/(home)';
import { colors } from '@/theme/colors';
import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

interface CategoryItemProps {
    category: Category;
    isActive: boolean;
    onPress: () => void;
    size: number;
}

const CategoryItem = ({ category, isActive, onPress, }: CategoryItemProps) => {
    const heightAnim = React.useRef(new Animated.Value(60)).current;

    React.useEffect(() => {
      Animated.timing(heightAnim, {
        toValue: isActive ? 125 : 60,
        duration: 250,
        useNativeDriver: false, 
      }).start();
    }, [isActive]);

    return (
        <Animated.View style={[styles.outerContainer, { height: heightAnim }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPress}
          style={{ flex: 1 }}
        >
          <View
            style={[
              styles.innerContainer,
              isActive && styles.activeInnerContainer,
            ]}
          >
                    <Animated.View style={[styles.imageWrapper,]}>
                        <View style={styles.imageContainer}>
                            <Animated.Image
                                source={{ uri: category.image }}
                                style={styles.categoryImage}
                                resizeMode="cover"
                            />
                        </View>
                        {isActive &&
                            <Animated.View style={[styles.textContainer,]}>
                                <Text
                                    variant="caption"
                                    fontWeight="medium"
                                    style={styles.categoryName}
                                    numberOfLines={1}
                                >
                                    {category.name}
                                </Text>
                            </Animated.View>
                        }
                    </Animated.View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
   
    outerContainer: {
        marginHorizontal: 15,
        width: 60,
        overflow: 'hidden',
    },
   
    innerContainer: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 2,
        backgroundColor: colors.white,
        // justifyContent: 'center',
    },
    activeInnerContainer: {
        borderColor: colors.secondary,
        backgroundColor: colors.secondary
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    textContainer: {
        marginTop: 15,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 12,
        color: colors.textPrimary,
        textAlign: 'center',
        fontWeight: 'medium',
        transform: [{ rotate: '-90deg' }],
        textAlignVertical: 'center',
    },
});

export default CategoryItem;
