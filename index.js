function createStore () {
    let state // create a state variable is going to change to hold entire application
    
    // acess the state
     const getState = () => state;

     return {
        getState
    }
}
//create store variable 
const store = createStore()


