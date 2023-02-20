import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
        makeStyles
} from '@material-ui/core';
import { CarForm } from '../CarForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'make', headerName: 'Make', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1},
    { field: 'purchase_date', headerName: 'Purchase Date', flex: 1 },

];

interface gridData {
    data: {
        id?: string;
    }
};

const useStyles = makeStyles({
    lightBackground: {
        backgroundColor: '#F7B05B',
        color: '#1F1300'
    },
    darkBackground: {
        backgroundColor: '#CC5803',
        color: '#1F1300'
    },
    padding: {
        padding: '5px',
        margin: '5px'
    }
})

export const DataTable = () => {

    let { carData, getData } = useGetData();
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>( { data: {} } );
    const [ selectionModel, setSelectionModel ] = useState<any>( [] );
    const classes = useStyles();

    let handleOpen = () => {
        setOpen(true);
    };

    let handleClose =() => {
        setOpen(false);
    };

    let deleteData = () => {
        server_calls.delete( selectionModel );
        getData();
        setTimeout( () => { window.location.reload() }, 1000 );
    }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>My Cars</h2>

      <DataGrid rows={ carData } columns={ columns } pageSize={ 5 } checkboxSelection={ true }
        onSelectionModelChange={ (item) => {
            setSelectionModel( item )
        }} />

        <Button onClick={ handleOpen } className={`${classes.lightBackground} ${classes.padding}`}>Update</Button>
        <Button variant="contained" onClick={ deleteData } className={`${classes.darkBackground} ${classes.padding}`}>Delete</Button>

        <Dialog open={ open } onClose={ handleClose } aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Car { selectionModel }</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Car</DialogContentText>
                <CarForm id={ selectionModel! } />
            </DialogContent>
            <DialogActions>
                <Button onClick={ handleClose } color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
