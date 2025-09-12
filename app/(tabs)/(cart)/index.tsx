import { removeFromCart, updateQuantity } from '@/app/redux/Slices/CartSlice';
import { RootState } from '@/app/redux/store';
import CartItemCard from '@/components/CartItemCard';
import EmptyCart from '@/components/EmptyCart';
import RootLayout from '@/components/RootLayout';
import Text from '@/components/Text';
import { colors } from '@/theme/colors';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartScreen = () => {
  const cartData = useSelector((state: RootState) => state.cart.cartItems)
  const dispatch = useDispatch()

  console.log({ cartData })


  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isCartEmpty = cartData.length === 0;

  return (
    <RootLayout commonHeader={true} title={'Cart'} iconName={'shoppingcart'}>
      <View style={styles.container}>
        {isCartEmpty ? (
          <EmptyCart />
        ) : (
          <>
            {/* cart card */}
            <FlatList 
              data={cartData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <CartItemCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  onIncrease={() => dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}))}
                  onDecrease={() => dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}))}
                  onRemove={() => dispatch(removeFromCart(item))}
                />
              )}
              contentContainerStyle={styles.cartList}
              showsVerticalScrollIndicator={false}
            />
            {/* checkout Card */}
            <View style={styles.totalContainer}>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Subtotal:</Text>
                <Text style={styles.totalAmount}>${calculateTotal().toFixed(2)}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Delivery Fee:</Text>
                <Text style={styles.totalAmount}>$2.99</Text>
              </View>
              <View style={[styles.totalRow, styles.grandTotal]}>
                <Text style={styles.grandTotalLabel}>Total:</Text>
                <Text style={styles.grandTotalAmount}>
                  ${(calculateTotal() + 2.99).toFixed(2)}
                </Text>
              </View>
              <Link href='/checkout' style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
              </Link>

            </View>
          </>
        )}
      </View>
    </RootLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // padding: 16,
  },


  cartList: {
    paddingBottom: 30,
  },
  totalContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginTop: 'auto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: colors.gray600,
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray800,
  },
  grandTotal: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  grandTotalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
});

export default CartScreen;