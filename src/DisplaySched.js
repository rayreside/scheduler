import React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarDensitySelector
 } from '@material-ui/data-grid';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './DisplaySched.css';

//set font
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
const columns = [
  { field: 'id', headerName: 'Order', width: 130, sortable: false },
  { field: 'TASK', headerName: 'Task', width: 300, sortable: false },
  { field: 'FIRST', headerName: 'First', width: 130, sortable: false, editable: true },
  { field: 'SECOND', headerName: 'Second', width: 130, sortable: false, editable: true }
];

//data grid toolbar
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const DisplaySched = ({ tasklist }) => {

    return(
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid disableColumnMenu={true}
            disableSelectionOnClick={true}
            autoHeight
            rows={tasklist}
            columns={columns}
            hideFooter={true}
            sortModel={[
                {
                  field: 'id',
                  sort: 'asc',
                },
              ]}
            components={{
              Toolbar: CustomToolbar,
            }} />
          </div>
        </div>
      </ThemeProvider>
    )
}

export default DisplaySched;