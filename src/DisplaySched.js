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
    fontSize: 15
  },
  palette: {
    type: 'dark',
  },
});

// define which columns you have in your data
const columns = [
  { field: 'id', headerName: 'Order', sortable: false, hide: true },
  { field: 'TASK', headerName: 'TASK', flex: 5, sortable: false },
  { field: 'FIRST', headerName: '4-12', flex: 2, sortable: false, editable: true },
  { field: 'SECOND', headerName: '12-4', flex: 2, sortable: false, editable: true }
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
        <div style={{ flexGrow: 1 }}></div>
        <div style={{ flexGrow: 3 }}>
          <DataGrid disableColumnMenu={true}
          disableSelectionOnClick={true}
          autoHeight
          rows={tasklist}
          columns={columns}
          hideFooter={true}
          rowHeight={38}
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
        <div style={{ flexGrow: 1 }}></div>
      </div>
    </ThemeProvider>
  )
}

export default DisplaySched;