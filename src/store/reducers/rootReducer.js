import {combineReducers} from 'redux';

import CatReducer from "./catReducer";
import CategoryReducer from './categoryreducer'

const rootReducer = combineReducers({
    cats: CatReducer,
    categories: CategoryReducer
})

export default rootReducer;