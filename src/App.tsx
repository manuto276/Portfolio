import React from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Project from './components/projects/Project';
import ProjectList from './components/projects/ProjectList';
import SwipeView, { SwipeDirection } from './components/swipeview/SwipeView';
import Title from './components/title/Title';

function App() {
  const [showAbout, setShowAbout] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 800 });
  const isMobile = useMediaQuery({ maxWidth: 799 });

  return (
    <div className='App' style={{overflow: (showAbout || showPreview) ? 'hidden' : 'auto'}}>
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
      <SwipeView width={isDesktop ? 'fit-content' : '100%'} visible={showAbout} onDismiss={() => setShowAbout(false)} swipeDirection={isDesktop || isTablet ? SwipeDirection.RIGHT : SwipeDirection.BOTTOM}>
        <About />
      </SwipeView>
      <SwipeView width='100%' visible={showPreview} onDismiss={() => setShowPreview(false)} swipeDirection={SwipeDirection.TOP}>
      </SwipeView>
    </div>
  );
}

export default App;