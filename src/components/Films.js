import React, { useEffect, useState } from 'react';
import '../css/main.css';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('json/films.json')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  return (
    <div>
      <h1>Catalogue des Films</h1>
      <div id="programme-container">
        {/* Afficher les films ici */}
      </div>
    </div>
  );
};

export default Films;
