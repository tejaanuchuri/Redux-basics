function createStore () {
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
     return {
        getState,
        subscribe
    }
}
//create store variable 
const store = createStore()

//the way to listen for changes on the state 
store.subscribe(()=>{
    console.log('the new state is :', store.getState());
})

//update the state
const unsubscribe = store.subscribe(()=>{
    console.log('the state change');
})

unsubscribe();



