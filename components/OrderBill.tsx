import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Text from './Text';

interface OrderBillProps {
  subtotal: number;
  deliveryFee: number;
  discount: number;
  onApplyPromo: (code: string) => void;
}

const OrderBill: React.FC<OrderBillProps> = ({
  subtotal,
  deliveryFee,
  discount,
  onApplyPromo,
}) => {
  const [promoCode, setPromoCode] = React.useState('');
  const total = subtotal + deliveryFee - discount;

  return (
    <View style={styles.container}>
      <Text variant='h4' fontWeight='medium' style={styles.sectionTitle}>Order Bill</Text>
      
      {/* Promo Code Input */}
      <View style={styles.promoContainer}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter Promo Code"
          value={promoCode}
          onChangeText={setPromoCode}
          placeholderTextColor={colors.gray400}
        />
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => onApplyPromo(promoCode)}
        >
          <Text variant='caption' fontWeight='normal' style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bill Details */}
      <View style={styles.billRow}>
        <Text variant='body' fontWeight='normal' style={styles.billLabel}>Subtotal</Text>
        <Text variant='body' fontWeight='normal' >${subtotal.toFixed(2)}</Text>
      </View>
      
      <View style={styles.billRow}>
        <Text variant='body' fontWeight='normal'  style={styles.billLabel}>Delivery Fee</Text>
        <Text variant='body' fontWeight='normal' >${deliveryFee.toFixed(2)}</Text>
      </View>
      
      {discount > 0 && (
        <View style={styles.billRow}>
          <Text variant='body' fontWeight='normal' style={styles.billLabel}>Discount</Text>
          <Text variant='body' fontWeight='normal'style={[styles.discountText]}>-${discount.toFixed(2)}</Text>
        </View>
      )}
      
      <View style={styles.divider} />
      
      <View style={[styles.billRow, styles.totalRow]}>
        <Text variant='body' fontWeight='bold' >Total</Text>
        <Text variant='body' fontWeight='bold' >${total.toFixed(2)}</Text>
      </View>
      
      {/* Estimated Delivery Time */}
      <View style={styles.deliveryTimeContainer}>
        <Text variant='caption' fontWeight='medium' >
          🛵 Estimated delivery time: 25-30 mins
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {
   
    marginBottom: 16,
  },
  promoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  promoInput: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: colors.gray800,
  },
  applyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  applyButtonText: {
    color:colors.white
    
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  billLabel: {
    color: colors.gray600,
  },
 
  discountText: {
    color: colors.success,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray200,
    marginVertical: 12,
  },
  totalRow: {
    marginBottom: 0,
  },

 
  deliveryTimeContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: `${colors.primary}10`,
    borderRadius: 8,
    alignItems: 'center',
  },
  
});

export default OrderBill;
