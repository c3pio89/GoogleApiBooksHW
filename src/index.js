import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './components/Header';
import Slider from './components/Slider';
import CategoryList from './components/CategoryList';
import BookList from './components/BookList';

const ExampleComponent = lazy(() => import('./ExampleComponent'));

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <CategoryList />
    <div className="books">
      <h2>Книги</h2>
      <BookList />
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <ExampleComponent />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);