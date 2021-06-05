import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './Shift.css';

// define which columns you have in your data
const columns = [
    { field: 'id', headerName: 'Order', hide: 'true' },
    { field: 'TASK', headerName: 'Task', width: 300 },
    { field: 'ASSIGNED', headerName: 'Assigned', width: 300 }
  ];

const Sched = ({ tasklist }) => {

    return(
                <DataGrid autoHeight rows={tasklist} columns={columns} sortModel={[
                    {
                      field: 'id',
                      sort: 'asc',
                    },
                  ]} />
    )
}

export default Sched;