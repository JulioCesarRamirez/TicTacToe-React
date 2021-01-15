import React from 'react';
import { Game } from './components/Game';
import Particles from 'react-particles-js';

import './styles.css';

export const App = () => {
  const particlesParams = {
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };
  return (
    <div className="App">
      <Game />
      <Particles className="particles" params={particlesParams} />
    </div>
  );
};
