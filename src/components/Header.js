import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
  const handleMenuClick = (event) => {
    // Предотвращаем переход по ссылке при клике на пункты меню
    event.preventDefault();
    // Обработка клика на пункты меню (можно добавить другие действия)
    console.log('Menu item clicked');
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Bookshop Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="user-interface">
        <a href="/profile">Profile</a>
        <a href="/cart">Cart</a>
      </div>
    </header>
  );
};

export default Header;
