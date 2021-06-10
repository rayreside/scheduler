import React, { useState } from 'react';
import './App.css';
import CreateSched from './CreateSched';

import { tasklist } from './tasks';
import { techlist } from './techf';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  //STATE
  const [tasks, setTasks] = useState(tasklist);
  const [techs , setTechs] = useState(techlist);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        <CreateSched tasks={tasks} techs={techs} setTasks={setTasks} setTechs={setTechs}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
