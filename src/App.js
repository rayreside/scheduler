import React, { useState } from 'react';
import './App.css';

import shuffle from 'shuffle-array';

import { initTasks } from './tasks';
import { initTasklist } from './tasklist';
import { initTechf } from './techf';
import { initTechp } from './techp';

function App() {

  //STATE
  const [ tasks, setTasks ] = useState(initTasks);
  const [ tasklist, setTasklist ] = useState(initTasklist);
  const [ techf, setTechf ] = useState(initTechf);
  const [ techp, setTechp ] = useState(initTechp);
  const [ techlist, setTechlist ] = useState([]);

  function shuffleTechlist(tf, tp) {
    shuffle(tf);
    shuffle(tp);
    const newList = tp.concat(tf);
    setTechlist(newList);
  }

  return (
    <div className="App">
      <button onClick={shuffleTechlist(techf, techp)}>Try me</button>
    </div>
  );
}

export default App;
