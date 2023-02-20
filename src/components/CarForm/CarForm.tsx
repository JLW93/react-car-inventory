import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseYear, choosePurchaseDate } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button, makeStyles } from '@material-ui/core';
import { server_calls } from '../../api';

interface CarFormProps {
    id?: string;
    data?: {}
};

interface CarState {
    make: string;
    model: string;
    year: string;
    purchase_date: string;
};

const useStyles = makeStyles({
    button: {
        backgroundColor: '#F7B05B',
        color: '#1F1300'
    }
})

export const CarForm = ( props: CarFormProps ) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<CarState>(state => state.make);
    const { register, handleSubmit } = useForm({ })
    const classes = useStyles();

    const onSubmit = ( data: any, event:any ) => {
        if (props.id!) {
            server_calls.update( props.id!, data );
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => { window.location.reload() }, 1000 );
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(choosePurchaseDate(data.purchase_date));
            server_calls.create(store.getState());
            setTimeout( () => { window.location.reload() }, 1000 );
        }
    }

  return (
    <div>
      <form onSubmit={ handleSubmit( onSubmit ) }>
        <div>
            <label htmlFor="make">Make</label>
            <Input { ...register('make') } name="make" placeholder="Make" />
        </div>
        <div>
            <label htmlFor="model">Model</label>
            <Input { ...register('model') } name="model" placeholder="Model" />
        </div>
        <div>
            <label htmlFor="year">Year</label>
            <Input { ...register('year') } name="year" placeholder="Year" />
        </div>
        <div>
            <label htmlFor="purchase_date">Purchase Date</label>
            <Input { ...register('purchase_date') } name="purchase_date" placeholder="Purchase Date" />
        </div>
        <Button type="submit" className={classes.button}>Submit</Button>
      </form>
    </div>
  )
}
