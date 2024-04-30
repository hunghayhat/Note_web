// import { createStore } from 'https://cdn.skypack.dev/redux';

/////////// MY REDUX ///////////////////

function createStore(reducer) {
    let state = reducer(undefined, {})
    console.log(state);
    const subscribers = []

    return {
        getState() {
            return state;
        },

        dispatch(action) {
            state = reducer(state, action)

            subscribers.forEach(subscriber => subscriber()) 
        },

        subscribe(subscriber) {
            subscribers.push(subscriber)
        }
    }
}
// Reducer

const initiateState = 0;

function bankReducer(state = initiateState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload
        case "WITHDRAW":
            return state - action.payload

        default:
            return state
    }
}

// store

//actions

function aciontDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: "WITHDRAW",
        payload
    }
}

// DOM event

const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector("#withdraw")


//event handler

deposit.onclick = function() {
    store.dispatch(aciontDeposit(10))
}

withdraw.onclick = function () {
    store.dispatch(actionWithdraw(10))
}


const store = window.store =  createStore(bankReducer)
// bien window cho phep truy cap qua console


//Listener
store.subscribe(()=>{
    console.log("hi");
    render()
 })

function render () {
    const output = document.querySelector('#output')
    output.innerText = store.getState()
}

render()