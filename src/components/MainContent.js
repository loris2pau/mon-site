// MainContent.js
import React, { useState } from 'react';
import '../css/accueil.css';

const MainContent = ({ content, selectedProgram, films, series, replay }) => {
  const [cart, setCart] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const getUniqueId = (item, type) => {
    switch (type) {
      case 'films':
        return `film-${item.id}`;
      case 'series':
        return `serie-${item.id}`;
      case 'replay':
        return `replay-${item.id}`;
      default:
        return item.id;
    }
  };

  const handleQuantityChange = (itemId, change, type) => {
    setCart((prevCart) => {
      const uniqueId = getUniqueId({ id: itemId }, type);
      const item = films.find(film => getUniqueId(film, 'films') === uniqueId) ||
                   series.find(serie => getUniqueId(serie, 'series') === uniqueId) ||
                   replay.find(replay => getUniqueId(replay, 'replay') === uniqueId);

      if (!item) return prevCart;

      const currentQuantity = prevCart[uniqueId] || 0;
      const newQuantity = Math.max(0, Math.min(currentQuantity + change, item.stock));

      if (newQuantity === 0) {
        const { [uniqueId]: _, ...updatedCart } = prevCart;
        return updatedCart;
      }

      return { ...prevCart, [uniqueId]: newQuantity };
    });
  };

  const handleValidateCart = () => {
    setShowSummary(true);
  };

  const renderProgramTable = (programData, type) => {
    const keys = Object.keys(programData[0]).filter(key => key !== 'id');

    return (
      <>
        <button onClick={handleValidateCart} style={{ marginBottom: '10px' }}>Valider le Panier</button>
        <table border="1">
          <thead>
            <tr>
              {keys.map((key, index) => (
                <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))}
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {programData.map((item) => (
              <tr key={item.id}>
                {keys.map((key, keyIndex) => (
                  <td key={keyIndex}>
                    {key === 'prix' ? `${item[key]} €` : item[key]}
                  </td>
                ))}
                <td className="quantity-cell">
                  <button className="quantity-button" onClick={() => handleQuantityChange(item.id, 1, type)}>+</button>
                  {cart[getUniqueId(item, type)] || 0}
                  <button className="quantity-button" onClick={() => handleQuantityChange(item.id, -1, type)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleValidateCart} style={{ marginTop: '10px' }}>Valider le Panier</button>
      </>
    );
  };

  const renderProgram = () => {
    switch (selectedProgram) {
      case 'films':
        return (
          <div>
            <h2>Programme de Films</h2>
            {renderProgramTable(films, 'films')}
          </div>
        );
      case 'series':
        return (
          <div>
            <h2>Programme de Séries</h2>
            {renderProgramTable(series, 'series')}
          </div>
        );
      case 'replay':
        return (
          <div>
            <h2>Programme de Replay</h2>
            {renderProgramTable(replay, 'replay')}
          </div>
        );
      default:
        return null;
    }
  };

  const renderSummary = () => {
    const cartItems = Object.keys(cart).map(itemId => {
      const type = itemId.startsWith('film-') ? 'films' : itemId.startsWith('serie-') ? 'series' : 'replay';
      const item = films.find(film => getUniqueId(film, 'films') === itemId) ||
                   series.find(serie => getUniqueId(serie, 'series') === itemId) ||
                   replay.find(replay => getUniqueId(replay, 'replay') === itemId);
      return {
        title: item.title,
        quantity: cart[itemId],
        price: item.prix
      };
    });

    const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
      <div>
        <h2>Récapitulatif de la Commande</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title} - Quantité: {item.quantity} - Prix: {item.price} €</li>
          ))}
        </ul>
        <p>Total: {total} €</p>
        <button onClick={() => setShowSummary(false)}>Continuer vos achats</button>
      </div>
    );
  };

  return (
    <main>
      {content === 'accueil' && (
        <div>
          <h2>Bienvenue sur la page d'accueil de FlixNet</h2>
          <p>Découvrez nos derniers films et séries.</p>
        </div>
      )}
      {content === 'programme' && !showSummary && renderProgram()}
      {content === 'contact' && (
        <div>
          <h2>Contactez-nous</h2>
          <p>Informations de contact...</p>
        </div>
      )}
      {content === 'connexion' && (
        <div>
          <h2>Connexion</h2>
          <p>Formulaire de connexion...</p>
        </div>
      )}
      {showSummary && renderSummary()}
    </main>
  );
};

export default MainContent;
