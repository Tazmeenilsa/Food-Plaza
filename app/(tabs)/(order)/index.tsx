import NoOrdersFound from '@/components/NoOrdersFound';
import OrderItem from '@/components/OrderCard';
import RootLayout from '@/components/RootLayout';
import Text from '@/components/Text';
import { colors } from '@/theme/colors';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const OrderScreen = () => {
  return (
    <RootLayout commonHeader={true} title="My Orders" iconName="CodeSandbox">
      <OrderTabs />
    </RootLayout>
  );
};
const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {['pending', 'paid', 'delivered'].map((tab) => (
          <View
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
          >
            <Text
              variant="body"
              fontWeight="medium"

              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}
              onPress={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </View>
        ))}
      </View>
      <OrderList status={activeTab} />
    </View>
  );
};


const OrderList = ({ status }: { status: string }) => {
  const orders = [
    {
      id: '1',
      orderNumber: 'ORD-001',
      date: 'Sep 10, 2023',
      items: '2 items',
      total: '$24.99',
      status: 'pending'
    },
    {
      id: '2',
      orderNumber: 'ORD-002',
      date: 'Sep 8, 2023',
      items: '3 items',
      total: '$34.99',
      status: 'paid'
    },
    {
      id: '3',
      orderNumber: 'ORD-003',
      date: 'Sep 5, 2023',
      items: '1 item',
      total: '$12.99',
      status: 'delivered'
    },
  ];

  const filteredOrders = status === 'all'
    ? orders
    : orders.filter(order => order.status === status);

  if (filteredOrders.length === 0) {
    return (
      <NoOrdersFound status={status} />

    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      {filteredOrders.map(order => (
        <OrderItem
          key={order.id}
          status={order.status}
          orderNumber={order.orderNumber}
          date={order.date}
          items={order.items}
          total={order.total}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {

    color: colors.gray600,
  },
  activeTabText: {
    color: colors.primary,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },



});

export default OrderScreen;