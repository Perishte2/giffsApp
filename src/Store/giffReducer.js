const defaultState={
    giffs:[]
}

const ADD_MANY_GIFFS = "ADD_MANY_GIFFS";

export const giffReducer = (state=defaultState, action) => {
    switch(action.type) {
        case "ADD_MANY_GIFFS":
          return {...state, giffs:[...state.giffs, ...action.payload]}
        default:
            return state
    }
}



export const addManyGiffsActions = (payload) => ({type: ADD_MANY_GIFFS, payload })
