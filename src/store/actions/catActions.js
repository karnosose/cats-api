import {ACTION_TYPES} from '../actionTypes'

export const setCategories = data => (
    {
        type: ACTION_TYPES.SET_CATEGORIES,
        payload: data
    }
);

export const setCatsList = (data, id) => (
    {
        type: ACTION_TYPES.SET_CATS_LIST,
        payload: {
            data,
            id
        }
    }
);

export const setCatsByCategory =  (data, id) => (
    {
        type: ACTION_TYPES.SET_CATS_BY_CATEGORY,
        payload: {
            data,
            id
        }
    }
)