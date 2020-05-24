
const initialState = {
    character: []
}
 
const Reducer = (state, action) => {
    switch(action.type){
        case 'getCharacter':
        return{
            ...state,
            character:action.payload
        }
        default:
            return state || initialState
    }

}

export {
    initialState, Reducer
}