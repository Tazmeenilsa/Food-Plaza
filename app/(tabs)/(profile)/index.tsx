import RootLayout from '@/components/RootLayout';
import Text from '@/components/Text';
import { colors } from '@/theme/colors';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'Member since June 2023',
  };

  const menuItems = [
    // { icon: 'user', title: 'Edit Profile', iconType: 'feather' as const },
    { icon: 'shopping-bag', title: 'My Orders', iconType: 'feather' as const },
    { icon: 'hearto', title: 'Favorites', iconType: 'ant' as const },
    { icon: 'map-pin', title: 'Addresses', iconType: 'feather' as const },
    { icon: 'creditcard', title: 'Payment Methods', iconType: 'ant' as const },
    { icon: 'settings', title: 'Settings', iconType: 'feather' as const },
    // { icon: 'log-out', title: 'Sign Out', iconType: 'feather' as const, color: colors.error },
  ];

  const renderIcon = (iconType: 'feather' | 'ant', name: string, color: string = colors.gray700) => {
    switch (iconType) {
      case 'feather':
        return <Feather name={name as any} size={24} color={color} />;
      case 'ant':
        return <AntDesign name={name as any} size={24} color={color} />;
      default:
        return null;
    }
  };

  return (
    <RootLayout commonHeader={true} title="Profile" iconName="user">
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <MaterialIcons name="edit" size={18} color={colors.white} />
            </TouchableOpacity>
          </View>
          <Text variant="h3" fontWeight="semiBold" style={styles.userName}>
            {user.name}
          </Text>
          <Text variant="body" style={styles.userEmail}>
            {user.email}
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text variant="h4" fontWeight="semiBold">12</Text>
            <Text variant="caption">Orders</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="h4" fontWeight="semiBold">4.8</Text>
            <Text variant="caption">Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="h4" fontWeight="semiBold">3</Text>
            <Text variant="caption">Coupons</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => { }}
            >
              <View style={styles.menuIcon}>
                {renderIcon(item.iconType, item.icon,
                  //  item.color
                )}
              </View>
              <Text
                variant="body"
                style={[styles.menuText
                  // item.color && { color: item.color  }
                ]}
              >
                {item.title}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={colors.gray400}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </RootLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: colors.white,
    marginBottom: 8,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.primaryLight,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 6,
  },
  userName: {
    marginBottom: 4,
    color: colors.textPrimary,
  },
  userEmail: {
    color: colors.gray500,
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    paddingVertical: 16,
    marginBottom: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuIcon: {
    width: 24,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    color: colors.textPrimary,
  },
});

export default ProfileScreen;