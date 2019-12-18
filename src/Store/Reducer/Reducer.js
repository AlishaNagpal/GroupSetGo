import { combineReducers } from "redux";
import * as Actions from '../../utils/ActionTypes'
import DATA from '../../DataSource'
import CATEGORIES from '../../DataSourceForCategories'

const initialState = {
    date: "01-01-1990",
    Event_Data: DATA,
    categoryData: CATEGORIES,
    savedCategories: [],
    selected: false,
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.PICK_DATE:
            return { ...state, date: action.payload.date }
        case Actions.EVENT_DATA:
            return { ...state, Event_Data: action.payload.data }
        case Actions.CATEGORY_MODAL:
            return { ...state, categoryData: action.payload.data }
        case Actions.SAVED_CATEGORIES:
            return { ...state, savedCategories: action.payload.data }
        case Actions.SELECTED:
            return { ...state, selected: action.payload.data }
        default:
            return state
    }
}

export const reducer = combineReducers({
    Reducer: Reducer
});