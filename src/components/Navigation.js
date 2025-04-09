import React from 'react';
import '../css/navigation.css';

const Navigation = ({ onContentChange, onProgramSelect, isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onContentChange('accueil')}>Accueil</button></li>
        <li><button onClick={() => onContentChange('contact')}>Contact</button></li>
        <li>
          <button style={{ backgroundColor: '#ff9999' }} onClick={() => onProgramSelect('films')}>Films</button>
        </li>
        <li>
          <button style={{ backgroundColor: '#99ff99' }} onClick={() => onProgramSelect('series')}>Séries</button>
        </li>
        <li>
          <button style={{ backgroundColor: '#99aaff' }} onClick={() => onProgramSelect('replay')}>Replay</button>
        </li>
        {!isLoggedIn && (
          <>
            <li><button onClick={() => onContentChange('connexion')}>Connexion</button></li>
            <li><button onClick={() => onContentChange('inscription')}>Inscription</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
