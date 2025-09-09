import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      <Text style={styles.sectionTitle}>Order Bill</Text>
      
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
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bill Details */}
      <View style={styles.billRow}>
        <Text style={styles.billLabel}>Subtotal</Text>
        <Text style={styles.billValue}>${subtotal.toFixed(2)}</Text>
      </View>
      
      <View style={styles.billRow}>
        <Text style={styles.billLabel}>Delivery Fee</Text>
        <Text style={styles.billValue}>${deliveryFee.toFixed(2)}</Text>
      </View>
      
      {discount > 0 && (
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Discount</Text>
          <Text style={[styles.billValue, styles.discountText]}>-${discount.toFixed(2)}</Text>
        </View>
      )}
      
      <View style={styles.divider} />
      
      <View style={[styles.billRow, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
      
      {/* Estimated Delivery Time */}
      <View style={styles.deliveryTimeContainer}>
        <Text style={styles.deliveryTimeText}>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray900,
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
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  billLabel: {
    fontSize: 14,
    color: colors.gray600,
  },
  billValue: {
    fontSize: 14,
    color: colors.gray800,
    fontWeight: '500',
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
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  deliveryTimeContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: `${colors.primary}10`,
    borderRadius: 8,
    alignItems: 'center',
  },
  deliveryTimeText: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 13,
  },
});

export default OrderBill;
