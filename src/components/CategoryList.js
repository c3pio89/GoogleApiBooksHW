import React, { useState, useEffect } from 'react';
import './CategoryList.css';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    // Функция для получения списка категорий с Google Books API
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=&printType=books&maxResults=1&startIndex=0'
        );
        const data = await response.json();
        if (data.items) {
          // Извлекаем уникальные категории из списка книг
          const uniqueCategories = Array.from(
            new Set(data.items.map((item) => item.volumeInfo.categories).flat())
          );
          setCategories(uniqueCategories);
          setActiveCategory(uniqueCategories[0]); // Выбираем первую категорию как активную
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="category-list">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
