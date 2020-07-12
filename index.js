
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

function todos (state = [], action) {
    switch(action.type) {
      case 'ADD_TODO' :
        return state.concat([action.todo])
      case 'REMOVE_TODO' :
        return state.filter((todo) => todo.id !== action.id)
      case 'TOGGLE_TODO' :
        return state.map((todo) => todo.id !== action.id ? todo :
          Object.assign({}, todo, { complete: !todo.complete }))
      default :
        return state
    }
  }
  
  function goals (state = [], action) {
    switch(action.type) {
      case 'ADD_GOAL' :
        return state.concat([action.goal])
      case 'REMOVE_GOAL' :
        return state.filter((goal) => goal.id !== action.id)
      default :
        return state
    }
  }
  
  function app (state = {}, action) {
    return {
      todos: todos(state.todos, action),
      goals: goals(state.goals, action),
    }
  }
  
  
//create store variable 
const store = createStore(app)

store.subscribe(()=>{
    console.log('the new state is: ',store.getState());
})

store.dispatch({
    type : 'ÁDD_TODO',
    todo: {
        id: 0,
        name:'Learn Redux',
        complete: false
    }
})