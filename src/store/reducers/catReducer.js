import {ACTION_TYPES} from '../actionTypes';

const initialState = {
    catsList: [],
    catsByCategory: [],
    category: ''
}

function CatReducer (state = initialState, action) {
    switch(action.type){
        case ACTION_TYPES.SET_CATS_LIST:

            return {
                ...state,
                catsList: [
                    ...state.catsList,
                    action.payload.data
                ],
                catsByCategory: [],
            };
        case ACTION_TYPES.SET_CATS_BY_CATEGORY:
            let newCats;
            if(state.category !== action.payload.id){
                newCats = [action.payload.data]
            } else {
                newCats = [
                    ...state.catsByCategory,
                    action.payload.data,
                ]
            };
            return {
                catsByCategory: newCats,
                catsList: [],
                category: action.payload.id,
            }
        default:
            return state
    }
}

export default CatReducer;