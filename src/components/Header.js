import React from 'react';
import '../css/header.css';

const Header = ({ username }) => {
  return (
    <header>
      <h1>Bienvenue sur FlixNet {username ? `, ${username}` : ''}</h1>
    </header>
  );
};

export default Header;
