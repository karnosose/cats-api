import {ACTION_TYPES} from '../actionTypes';

const initialState = {
    categories: []
}

function CategoryReducer (state = initialState, action) {
    switch(action.type){
        case ACTION_TYPES.SET_CATEGORIES:
            return {
                categories: action.payload
            };
        default:
            return state
    }
}

export default CategoryReducer;