
// this is library code 
function createStore (reducer) {
    let state // create a state variable is going to change to hold entire application
    let listeners = []
    // acess the state
     const getState = () => state;
     const subscribe = (listener) => {
         listeners.push(listener)
         return () => {
             listeners = listeners.filter((l)=>l!==listener)
         }
     }

     const dispatch = (action) => {
         state = reducer(state,action)
     }  
     return {
        getState,
        subscribe,
        dispatch
    }
}


// App code

function todos (state = [],action) {
    if (action.type == 'ADD_TODO') {
        return state.concat([action.todo])
    return state
}


//create store variable 
const store = createStore(todos)