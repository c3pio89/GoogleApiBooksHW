import React from 'react';
import './BookList.css';

const BookList = ({ books, selectedCategory }) => {
  // Фильтруем книги по выбранной категории, если она указана
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.volumeInfo.categories?.includes(selectedCategory))
    : books;

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div key={book.id} className="book-item">
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
