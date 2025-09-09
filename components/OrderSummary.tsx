import { colors } from '@/theme/colors';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';

interface OrderItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text variant='body' fontWeight='medium' style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <View style={styles.quantityContainer}>
          <Text variant='caption' fontWeight='medium' style={styles.quantity}>{quantity}</Text>
          <AntDesign name="close" size={15} color={colors.primary} />
          <Text variant='caption' fontWeight='medium' style={styles.price}>{price}</Text>


        </View>
      </View>
      <Text style={styles.itemTotal}>
        ${(price * quantity).toFixed(2)}
      </Text>
    </View>
  );
};

interface OrderSummaryProps {
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, }) => {
  return (
    <View style={styles.container}>
      <Text variant='h4' fontWeight='semiBold' style={styles.sectionTitle}>Order Summary</Text>
      {items.map((item) => (
        <OrderItem
          key={item.id}
          {...item}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {

    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 5,
  },

  quantity: {
    paddingRight: 5,
    textAlign: 'center',
  },
  price: {
    paddingLeft: 5,
    textAlign: 'center',

  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray900,
  },
});

export default OrderSummary;
