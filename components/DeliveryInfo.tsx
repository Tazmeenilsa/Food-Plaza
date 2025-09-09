import { colors } from '@/theme/colors';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

interface DeliveryInfoProps {
  address: string;
  onEditAddress: () => void;
}

const DeliveryInfo: React.FC<DeliveryInfoProps> = ({ address, onEditAddress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant='h4' fontWeight='semiBold' >Delivery Address</Text>
        <TouchableOpacity onPress={onEditAddress}>
          <Text variant='caption' fontWeight='medium' style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="enviromento" size={20} color={colors.primary} />
        </View>
        <Text variant='caption' fontWeight='normal' style={styles.addressText} numberOfLines={2}>
          {address}
        </Text>
      </View>
      <View style={styles.divider} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  editButton: {
    color: colors.primary,

  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: `${colors.primary}15`, // 15% opacity
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addressText: {
    flex: 1,

    color: colors.gray700,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray200,
    marginTop: 8,
  },
});

export default DeliveryInfo;
