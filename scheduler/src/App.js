import React, { useState } from 'react';
import './App.css';
import Sched from './Sched';

import { tasklist } from './tasks';
import { techlist } from './techf';

function App() {

  //STATE
  const [tasks, setTasks] = useState(tasklist);
  const [techs, setTechs] = useState(techlist);

  return (
    <div className="App">
      <Sched tasks={tasks} techs={techs} setTasks={setTasks}/>
    </div>
  );
}

export default App;
