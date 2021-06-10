import React, { useState } from 'react';
import './App.css';
import CreateSched from './CreateSched';

import { tasklist } from './tasks';
import { techlist } from './techf';

function App() {

  //STATE
  const [tasks, setTasks] = useState(tasklist);
  const [techs] = useState(techlist);

  return (
    <div className="App" style={{ display: 'flex', height: '100%' }}>
      <CreateSched tasks={tasks} techs={techs} setTasks={setTasks}/>
    </div>
  );
}

export default App;
