import * as ActionTypes from "./ActionTypes";

export const Recipe = (state = {
        // id: null,
        isLoading: true,
        errMess: null,
        recipe: []
    }, action) => {
    

    switch(action.type) {
        
        case ActionTypes.ADD_RECIPE:
            return {...state,
                isLoading: false,
                errMess: null,
                recipe: action.payload}

        // case ActionTypes.DELETE_RECIPE:
        //     return { ...state, 
        //         id: action.payload.id, 
        //         recipe: '', 
        //         authorities: [] }

        case ActionTypes.RECIPE_LOADING:
            return{...state,
                    isLoading: true,
                    errMess: null,
                    recipe: []}
    
        case ActionTypes.RECIPE_FAILED:
                return{...state, 
                    isLoading: false,
                    errMess: action.payload,
                    recipe: []}

        default:
            return state;
    }
}
