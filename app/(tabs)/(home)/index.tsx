import CategoryItem from '@/components/FoodCategories';
import FoodItemCard, { FoodItemProps } from '@/components/FoodItems';
import RootLayout from '@/components/RootLayout';
import SearchBar from '@/components/SearchBar';
import Text from '@/components/Text';
import { ApiData } from '@/utils/ApiData';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export default function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
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
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <CategoryItem
      key={item.id}
      category={item}
      isActive={activeCategory === item.id}
      onPress={() => setActiveCategory(activeCategory === item.id ? null : item.id)}
      size={itemSize}
    />
  )
  const filteredFoods = ApiData.foods.filter((food) => food.categoryId === activeCategory)
  return (
    <RootLayout homeheader={true} >
      <SearchBar
        placeholder="Search for food, restaurants, etc."
        style={styles.searchBar}
      />
      {/* categories */}
      <View style={styles.categories}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />


      </View>

      <View style={styles.list}>
        <Text variant='h3' fontWeight='medium' style={styles.sectionTitle}>{activeCategory ? categories.find((category) => category.id === activeCategory)?.name : 'Popular Now'} ✨</Text>
        <FlatList
          data={activeCategory ? filteredFoods : ApiData.foods}
          renderItem={renderFoodItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </RootLayout>

  );
}
const styles = StyleSheet.create({

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
