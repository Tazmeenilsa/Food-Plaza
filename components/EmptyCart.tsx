import { colors } from '@/theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="shoppingcart" size={80} color={colors.primary} />
      </View>
      <Text variant="h3" fontWeight="medium" style={styles.title}>
        Your basket is empty
      </Text>
      <Text variant="caption" style={styles.subtitle}>
        Looks like you haven't added anything to your cart yet
      </Text>

      <Link href="/(tabs)/(home)" style={styles.button} >
        <Text variant="button" fontWeight="normal">Continue Shopping</Text>
      </Link>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iconContainer: {
    backgroundColor: colors.gray200,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: 300,
    color:colors.gray600
  },
  button: {
    marginTop: 30,
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default EmptyCart;
