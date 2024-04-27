import {
    createStore
} from 'https://cdn.skypack.dev/redux';

// Reducer

const initiateState = 0;

function reducer(state = initiateState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload
        case "WITHDRAW":
            return state - action.payload

        default:
            return state
    }
}

// store

const store = createStore(reducer)
function render () {
    const output = document.querySelector("#output")
    output.innerText = store.getState()
}

render()