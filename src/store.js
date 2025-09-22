import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // ✅ This should already be present

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
