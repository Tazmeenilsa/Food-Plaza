import { colors } from "@/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const OrderItem = ({ status, orderNumber, date, items, total }:
    {
        status: string, orderNumber: string, date: string,
        items: string, total: string
    }) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return colors.warning;
            case 'paid':
                return colors.info;
            case 'delivered':
                return colors.success;
            default:
                return colors.gray500;
        }
    };

    return (
        <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
                <Text variant="body" fontWeight="medium" >Order #{orderNumber}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(status) }]}>
                    <Text variant="caption" fontWeight="normal" style={styles.statusText}>{status}</Text>
                </View>
            </View>
            <View style={styles.orderDetails}>
                <View style={styles.detailRow}>
                    <MaterialIcons name="calendar-today" size={16} color={colors.gray500} />
                    <Text  variant="caption" fontWeight="normal" style={styles.detailText}>{date}</Text>
                </View>
                <View style={styles.detailRow}>
                    <MaterialIcons name="restaurant" size={16} color={colors.gray500} />
                    <Text variant="caption" fontWeight="normal" style={styles.detailText}>{items}</Text>
                </View>
                <View style={[styles.detailRow, { marginTop: 8 }]}>
                    <Text variant="body" fontWeight="medium"style={styles.totalText}>Total: {total}</Text>
                    {/* <Text style={styles.viewDetails}>View Details →</Text> */}
                </View>
            </View>
        </View>
    )
}
export default OrderItem
const styles = StyleSheet.create({
    orderCard: {
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
  
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        color: colors.white,
    },
    orderDetails: {
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    detailText: {
        marginLeft: 8,
       color:colors.gray700
    },
    totalText: {
        flex: 1,
        
    },
    viewDetails: {
        color: colors.primary,
        fontWeight: '500',
    },
})