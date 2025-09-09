import { colors } from '@/theme/colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

type PaymentOption = {
    id: string;
    type: 'card' | 'cash' | 'wallet' | 'add';
    label: string;
    lastFour?: string;
};

interface PaymentMethodProps {
    selectedPayment: string;
    onSelectPayment: (id: string) => void;
    onAddNewCard: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
    selectedPayment,
    onSelectPayment,
    onAddNewCard,
}) => {
    const paymentOptions: PaymentOption[] = [
        {
            id: 'card',
            type: 'card',
            label: 'Credit/Debit Card',
            lastFour: '4242',
        },
        {
            id: 'cash',
            type: 'cash',
            label: 'Cash on Delivery',
        },
        {
            id: 'wallet',
            type: 'wallet',
            label: 'PayPal',
        },
        {
            id: 'add',
            type: 'add',
            label: 'Add New Card',
        },
    ];

    const renderIcon = (type: string) => {
        switch (type) {
            case 'card':
                return <MaterialIcons name="credit-card" size={24} color={colors.primary} />;
            case 'cash':
                return <MaterialIcons name="payments" size={24} color={colors.primary} />;
            case 'wallet':
                return <AntDesign name="wallet" size={24} color={colors.primary} />;
            case 'add':
                return <AntDesign name="pluscircle" size={24} color={colors.primary} />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <Text variant='h4' fontWeight='semiBold' style={styles.sectionTitle}>Payment Method</Text>
            {paymentOptions.map((option) => (
                <TouchableOpacity
                    key={option.id}
                    style={[
                        styles.paymentOption,
                        selectedPayment === option.id && styles.selectedOption,
                    ]}
                    onPress={() =>
                        option.type === 'add' ? onAddNewCard() : onSelectPayment(option.id)
                    }
                >
                    <View style={styles.optionContent}>
                        <View style={styles.optionLeft}>
                            <View style={styles.iconContainer}>
                                {renderIcon(option.type)}
                            </View>
                            <Text variant='caption' fontWeight='normal' style={styles.optionLabel}>
                                {option.label}
                                {option.lastFour && ` •••• ${option.lastFour}`}
                            </Text>
                        </View>
                        {selectedPayment === option.id && (
                            <View style={styles.radioSelected}>
                                <View style={styles.radioInner} />
                            </View>
                        )}
                        {selectedPayment !== option.id && option.type !== 'add' && (
                            <View style={styles.radio} />
                        )}
                    </View>
                </TouchableOpacity>
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
    paymentOption: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
    },
    selectedOption: {
        backgroundColor: `${colors.primary}15`, // 10% opacity
        marginHorizontal: -16,
        paddingHorizontal: 16,
        borderBottomWidth: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    optionContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: `${colors.primary}15`, // 15% opacity
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    optionLabel: {

        flex: 1,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.gray300,
        marginLeft: 12,
    },
    radioSelected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
    },
    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.white,
    },
});

export default PaymentMethod;
