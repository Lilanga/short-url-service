import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './shortCodes';
import api from './middleware/apiMiddleware';

export default function store() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
