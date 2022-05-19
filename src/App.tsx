import React from 'react';

import './App.css';
import About from './components/layouts/about/About';
import Header from './components/layouts/header/Header';
import Project from './components/layouts/projects/Project';
import ProjectList from './components/layouts/projects/ProjectList';
import Title from './components/layouts/title/Title';

function App() {
  const [showAbout, setShowAbout] = React.useState(false);
  const [showArticle, setShowArticle] = React.useState(false);

  return (
    <div className='App'>
      <div className='Home'>
        <div className='Presentation'>
          <Header onAbout={() => setShowAbout(true)} />
          <Title />
        </div>
        <ProjectList>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </ProjectList>
      </div>
      <About show={showAbout} onDismiss={() => setShowAbout(false)} />
    </div>
  );
}

export default App;