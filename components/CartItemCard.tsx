import { colors } from '@/theme/colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CartItemCardProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  name,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
            <MaterialIcons name="delete" size={25} color={colors.error} />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            onPress={onDecrease} 
            style={[styles.quantityButton, quantity === 1 && styles.disabledButton]}
            disabled={quantity === 1}
          >
            <AntDesign name="minus" size={16} color={quantity === 1 ? colors.gray400 : colors.primary} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={onIncrease} style={styles.quantityButton}>
            <AntDesign name="plus" size={16} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalPrice}>${(price * quantity).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray800,
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingVertical: 4,
  },
  quantityButton: {
    padding: 4,
    paddingHorizontal: 12,
  },
  disabledButton: {
    opacity: 0.5,
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray800,
    minWidth: 24,
    textAlign: 'center',
  },
  totalContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 8,
    minWidth: 60,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray800,
  },
  removeButton: {
    padding: 4,
  },
});

export default CartItemCard;
