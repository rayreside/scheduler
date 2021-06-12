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
import { Box } from '@material-ui/core';

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
});

// define which columns you have in your data
const columns = [
  { field: 'id', headerName: 'Order', sortable: false, hide: true },
  { field: 'TASK', headerName: 'task', flex: 4, sortable: false },
  { field: '1', headerName: '1-a', flex: 1, sortable: false, editable: true },
  { field: '2', headerName: '1-b', flex: 1, sortable: false, editable: true },
  { field: '3', headerName: '2-a', flex: 1, sortable: false, editable: true },
  { field: '4', headerName: '2-b', flex: 1, sortable: false, editable: true },
  { field: '5', headerName: '3-a', flex: 1, sortable: false, editable: true },
  { field: '6', headerName: '3-b', flex: 1, sortable: false, editable: true },
  { field: '7', headerName: '4-a', flex: 1, sortable: false, editable: true },
  { field: '8', headerName: '4-b', flex: 1, sortable: false, editable: true }
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
      <Box py={4} style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}></div>
        <div style={{ flexGrow: 5 }}>
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
      </Box>
    </ThemeProvider>
  )
}

export default DisplaySched;