// App.js
import React, { useState } from 'react';
import './css/layout.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import films from './data/films.json';
import series from './data/series.json';
import replay from './data/replay.json';

function App() {
  const [content, setContent] = useState('accueil');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleContentChange = (newContent) => {
    setContent(newContent);
    setSelectedProgram(null); // Reset selected program when changing main content
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setContent('programme');
  };

  const renderContent = () => {
    switch (content) {
      case 'connexion':
        return <Login />;
      case 'inscription':
        return <Register />;
      case 'programme':
        return (
          <MainContent
            content={content}
            selectedProgram={selectedProgram}
            films={films}
            series={series}
            replay={replay}
          />
        );
      case 'accueil':
      case 'contact':
        return <MainContent content={content} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Navigation onContentChange={handleContentChange} onProgramSelect={handleProgramSelect} />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
