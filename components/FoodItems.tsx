import { addToCart, decrementQuantity, removeFromCart } from '@/app/redux/Slices/CartSlice';
import { RootState } from '@/app/redux/store';
import { colors } from '@/theme/colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Text from './Text';


export interface FoodItemProps {
    id: number;
    name: string;
    price: number;
    rating: number;

    image: string;
    description: string;
}

const FoodItemCard: React.FC<FoodItemProps> = ({ id, name, price, image, description }) => {
    const cartData = useSelector((state: RootState) => state.cart.cartItems)
    const dispatch = useDispatch()
    const handleAdd = () => {
        const item = {
            id: id.toString(),
            name,
            price,
            image,
            description
        }
        dispatch(addToCart(item))
    };
    const handleRemove = () => {
        const currentItem = cartData.find(item => item.id === id.toString());
        if (currentItem && currentItem.quantity > 1) {
            dispatch(decrementQuantity({ id: id.toString() }));
        } else {
            dispatch(removeFromCart({ id: id.toString() }));
        }
    };

    return (
        <TouchableOpacity style={styles.foodCard} activeOpacity={0.8}>
            <View style={styles.foodInfo}>
                <View style={styles.textContainer}>
                    <Text variant='body' fontWeight='medium' style={styles.foodName}>
                        {name}
                    </Text>
                    <Text variant='caption' style={styles.description} numberOfLines={2}>
                        {description}
                    </Text>
                    <View style={styles.foodFooter}>
                        <Text style={styles.foodPrice}>${price.toFixed(2)}</Text>
                        {(cartData.find((item) => item.id === id.toString())?.quantity || 0) > 0 ? (
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={handleRemove} style={styles.quantityButton}>
                                    <MaterialIcons name="remove" size={20} color={colors.primary} />
                                </TouchableOpacity>
                                <Text variant='caption' fontWeight='medium' style={styles.quantityText}>
                                    {cartData.find((item) => item.id === id.toString())?.quantity || 0}
                                </Text>
                                <TouchableOpacity onPress={handleAdd} style={styles.quantityButton}>
                                    <AntDesign name="plus" size={20} color={colors.primary} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
                                <Text variant='button' fontWeight='normal'>Add +</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <Image source={{ uri: image }} style={styles.foodImage} />
            </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    foodCard: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 12,
    },
    foodImage: {
        width: 120,
        height: 120,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    foodInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginRight: 12,
    },
    foodName: {
        marginBottom: 4,
    },
    description: {
        marginBottom: 8,
        lineHeight: 18,
        color: colors.gray600
    },
    foodFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    foodPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
    },
    addButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondaryDark,
        borderRadius: 8,
        paddingVertical: 8,

        paddingHorizontal: 10,
        width: 100,
        justifyContent: 'space-between'
    },
    quantityButton: {
        width: 25,
        height: 25,
        borderRadius: 14,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        marginHorizontal: 8,

        color: colors.gray800,
    },
});

export default FoodItemCard;
