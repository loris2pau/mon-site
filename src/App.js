// App.js
import React, { useState } from 'react';
import './css/layout.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
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

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Navigation onContentChange={handleContentChange} onProgramSelect={handleProgramSelect} />
        <MainContent content={content} selectedProgram={selectedProgram} films={films} series={series} replay={replay} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
