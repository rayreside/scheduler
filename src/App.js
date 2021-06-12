import React from 'react';
import './App.css';
import CreateSched from './CreateSched';

import { tasklist } from './tasks';
import { techf } from './techf';
import { techp } from './techp';

function App() {

  return (
    <div className="App">
      <CreateSched tasks={tasklist} techf={techf} techp={techp}/>
    </div>
  );
}

export default App;
