import CategoryItem from '@/components/FoodCategories';
import FoodItemCard, { FoodItemProps } from '@/components/FoodItems';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Text from '@/components/Text';
import { colors } from '@/theme/colors';
import { ApiData } from '@/utils/ApiData';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export default function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(1);
  const itemSize = 60; // Size for the circular category items

  useEffect(() => {
    const fetchCategories = async () => {
      const mockCategories: Category[] = ApiData.categories;
      setCategories(mockCategories);
    };

    fetchCategories();
  }, []);
  const renderFoodItem = ({ item }: { item: FoodItemProps }) => (
    <FoodItemCard {...item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <SearchBar
            placeholder="Search for food, restaurants, etc."
            style={styles.searchBar}
          />
          {/* categories */}
          <View style={styles.categories}>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onPress={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                  size={itemSize}
                />
              ))}
            </ScrollView>
          </View>
          {/* <FoodCategories /> */}
          {/* Food items */}
          <View style={styles.list}>
            <Text variant='h3' fontWeight='medium' style={styles.sectionTitle}>Popular Now ✨</Text>
            <FlatList
              data={ApiData.foods}
              renderItem={renderFoodItem}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              // columnWrapperStyle={styles.row}
              showsVerticalScrollIndicator={false}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  content: {
    marginHorizontal: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  categories: {
    marginBottom: 24,
    paddingHorizontal: 8

  },
  list: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    
    marginBottom: 15,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
