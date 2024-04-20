import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// import { Provider } from 'react-redux';

const store = configureStore({
    reducer: rootReducer
});

export default store; 