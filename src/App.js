import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import BookList from './components/BookList';
import CategoryList from './components/CategoryList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=YOUR_API_KEY&printType=books&startIndex=0&maxResults=6&langRestrict=en'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('An error occurred while fetching books. Please try again later.');
      }
    };

    fetchBooks();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Header />
      <Slider />
      <CategoryList onSelectCategory={handleCategorySelect} />
      {error && <div className="error-message">{error}</div>} {/* Отображение сообщения об ошибке */}
      <div className="books">
        <h2>Книги</h2>
        <BookList books={books} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default App;
