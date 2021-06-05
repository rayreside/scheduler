import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Shift.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'fot-seurat-pron',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
    fontWeight: 600,
    fontSize: 20
  },
});

// define which columns you have in your data
const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order', width: 130 },
    { field: 'TASK', headerName: 'Task', width: 300, sortable: 'false' },
    { field: 'ASSIGNED', headerName: 'Assigned', width: 300, sortable: 'false' }
  ];

const Sched = ({ tasklist }) => {

    return(
      <ThemeProvider theme={theme}>
        <DataGrid disableColumnMenu={true} autoHeight rows={tasklist} columns={columns} sortModel={[
            {
              field: 'id',
              sort: 'asc',
            },
          ]} />
      </ThemeProvider>
    )
}

export default Sched;