import { FlatList } from 'react-native';
import { Text } from '../Text';
import { Category, Icon } from './style';
import { useState } from 'react';
import { ICategories } from '../../types/ICategories';

interface ICategoriesProps{
  categories: ICategories[];
  onSelectCategory: (categoryId: string) => void;
}
const Categories = ({categories,onSelectCategory}: ICategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (id: string) => {
    const category = selectedCategory === id ? '' : id;
    onSelectCategory(category);
    setSelectedCategory(category);
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = category._id === selectedCategory;
        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />

  );
};

export default Categories;
