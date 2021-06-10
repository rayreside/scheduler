import React, { useState } from 'react';
import './App.css';
import bg from "./img/summer.JPG";
import CreateSched from './CreateSched';

import { tasklist } from './tasks';
import { techlist } from './techf';

function App() {

  //STATE
  const [tasks, setTasks] = useState(tasklist);
  const [techs , setTechs] = useState(techlist);

  return (
    <div className="App">
      <CreateSched tasks={tasks} techs={techs} setTasks={setTasks} setTechs={setTechs}/>
    </div>
  );
}

export default App;
