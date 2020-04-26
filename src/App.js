import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game.js';
import Image from './images/hello.jpg';

function App() {

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};
  return (
    <div style={styles.paperContainer} className="lkj">
    <div>
    <h1 className="text"><center> TIC TAC TOE </center></h1>
    </div>
    <div style={styles.paper} className="lkj">
    <Game />
    </div>
    </div>
  );


export default App;
