import React, { useState } from 'react';
import './App.css';
import BoxGen from './components/BoxGen';
import ColorForm from './components/ColorForm';

function App() {
  const [currentColor, setCurrentColor] = useState([]);

  const addBox = (newColor) => { setCurrentColor([
    ...currentColor,
  newColor])};

  return (
    <div className="App">
      <ColorForm addBox = {addBox}/>
      <BoxGen currentColor={currentColor}/>
    </div>
  );
}

export default App;
