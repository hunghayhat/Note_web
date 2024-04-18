import { createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

export default store; 