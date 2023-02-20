import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        make: 'Make',
        model: 'Model',
        year: 'Year',
        purchase_date: 'Purchase Date',
    },
    reducers: {
        chooseMake: ( state, action ) => { state.make = action.payload },
        chooseModel: ( state, action ) => { state.model = action.payload },
        chooseYear: ( state, action ) => { state.year = action.payload },
        choosePurchaseDate: ( state, action ) => { state.purchase_date = action.payload },

    }
});

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, choosePurchaseDate } = rootSlice.actions;