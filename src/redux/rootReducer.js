import { combineReducers} from '@reduxjs/toolkit';
import todosReducer from './todosReducer';
import visibilityFilterReducer from '.visibilityFilterReducer';

const rootReducer = combineReducers ({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});

export default rootReducer;