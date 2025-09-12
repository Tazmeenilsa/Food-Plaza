
import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './Slices/CartSlice';

export const store = configureStore({

    reducer: {
        cart: CartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDspatch = ReturnType<typeof store.dispatch> 
export default store