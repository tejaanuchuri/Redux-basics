function createStore () {
    //the store should have four parts
    // 1. the store 
    // 2. get the state
    // 3. Listen to changes on the state
    // 4. update the state

    let state       // step 1

    const getState = () => state //step2

    return {
        getState 
    }
}