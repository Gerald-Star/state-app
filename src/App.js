import {useState} from 'react';
import './App.css';
import React from 'react';

import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';


function App() {

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'orange', id: 2},
    {fruitName: 'mango', id: 3}
  ]);

  return (
    <div className="App">
        <h2>Where should the sate go?</h2>
        <Fruits diet={fruits} />
        <FruitsCounter diet={fruits} />

    
     
    </div>
  );
};

export default App;
