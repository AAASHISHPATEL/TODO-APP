import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

export const Store= configureStore({
  reducer: todoReducer
})