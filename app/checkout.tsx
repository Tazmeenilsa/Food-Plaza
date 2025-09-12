import DeliveryInfo from '@/components/DeliveryInfo';
import OrderBill from '@/components/OrderBill';
import OrderSummary from '@/components/OrderSummary';
import PaymentMethod from '@/components/PaymentMethod';
import RootLayout from '@/components/RootLayout';
import Text from '@/components/Text';
import { colors } from '@/theme/colors';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


const CheckoutScreen = () => {
  const navigation = useNavigation();
  const cartData = useSelector((state: RootState) => state.cart.cartItems)

  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isLoading, setIsLoading] = useState(false);
  const [discount, setDiscount] = useState(0);
  const deliveryFee = 3.0;

  const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + deliveryFee - discount;



  const handleApplyPromo = (code: string) => {
    // Simple promo code logic 
    if (code.toLowerCase() === 'food20') {
      setDiscount(subtotal * 0.2); // 20% off
    } else if (code) {
      alert('Invalid promo code');
    }
  };

  const handlePlaceOrder = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Navigate to order confirmation
      // navigation.navigate('OrderConfirmation', { orderId: '12345' });
      alert('Order placed successfully!');
    }, 1500);
  };

  const handleAddNewCard = () => {

    alert('Add new card flow would open here');
  };

  const handleEditAddress = () => {

    alert('Edit address flow would open here');
  };

  return (
    <RootLayout commonHeader={true} title="Checkout" iconName="shoppingcart">
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <OrderSummary
          items={cartData}
        />

        <DeliveryInfo
          address="123 Food Street, Cuisine City, FC 12345, United States"
          onEditAddress={handleEditAddress}
        />

        <PaymentMethod
          selectedPayment={selectedPayment}
          onSelectPayment={setSelectedPayment}
          onAddNewCard={handleAddNewCard}
        />

        <OrderBill
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          discount={discount}
          onApplyPromo={handleApplyPromo}
        />

        <TouchableOpacity
          style={[styles.placeOrderButton, isLoading && styles.disabledButton]}
          onPress={handlePlaceOrder}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text variant='caption' fontWeight='medium' style={styles.placeOrderText}>
              Place Order • ${total.toFixed(2)}
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </RootLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  placeOrderButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  disabledButton: {
    backgroundColor: colors.gray400,
  },
  placeOrderText: {
    color: colors.white,

  },
});

export default CheckoutScreen;