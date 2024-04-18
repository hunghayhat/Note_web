import { nanoid } from 'nanoid';
const initialState = {
    notes: []
}
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLONE_NOTE':
            return {
                ...state,
                notes: [...state.notes,{ id: nanoid(), text: action.payload.text }]
            };
            default: 
            return state;
    }
}

export default notesReducer;