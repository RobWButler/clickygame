import React from 'react';
import './App.css';
import PicContainer from "./components/PicContainer"
import TitleCard from "./components/TitleCard"
function App() {
  return (
    <div className="App">
      <TitleCard className="App-header"/>
      <div className="container">
        <PicContainer/>
      </div>
    </div>
  );
}

export default App;
