import React from 'react';
import '../css/navigation.css';

const Navigation = ({ onContentChange, onProgramSelect, isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onContentChange('accueil')}>Accueil</button></li>
        <li><button onClick={() => onContentChange('contact')}>Contact</button></li>
        <li>
          <button style={{ backgroundColor: '#FF5733' }} onClick={() => onProgramSelect('films')}>Films</button>
        </li>
        <li>
          <button style={{ backgroundColor: '#33FF57' }} onClick={() => onProgramSelect('series')}>Séries</button>
        </li>
        <li>
          <button style={{ backgroundColor: '#3357FF' }} onClick={() => onProgramSelect('replay')}>Replay</button>
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
