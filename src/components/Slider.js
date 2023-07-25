import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Slider.css';

const Slider = () => {
  const [books, setBooks] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyALKcehJllkGUfb9vZktKAJTV8HkD9fskw&printType=books&startIndex=0&maxResults=3&langRestrict=en');
        setBooks(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Увеличиваем индекс текущего слайда
      setCurrentSlide((prevSlide) => (prevSlide === books.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Интервал переключения слайдов (5 секунд)

    return () => {
      clearInterval(interval);
    };
  }, [books.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? books.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === books.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slider">
      {books.length > 0 && (
        <>
          <img src={books[currentSlide].volumeInfo.imageLinks.thumbnail} alt={`Slide ${currentSlide + 1}`} />
          <button onClick={prevSlide}>Назад</button>
          <button onClick={nextSlide}>Вперед</button>
        </>
      )}
    </div>
  );
};

export default Slider;
