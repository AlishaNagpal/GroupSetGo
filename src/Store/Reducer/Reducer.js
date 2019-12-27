import { combineReducers } from "redux";
import * as Actions from '../../utils/ActionTypes'
import DATA from '../../DataSource'
import * as CATEGORIES from '../../DataSourceForCategories'
import * as PROFILES from '../../DataSourceForProfile'

const initialState = {
    Event_Data: DATA,
    categoryData: CATEGORIES.CATEGORIES,
    categoryDataType2: CATEGORIES.CATEGORIES2,
    savedCategories: [],
    selected: false,
    duration: 'Duration',
    profileData: PROFILES.PROFILE,
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'profileData':
            return { ...state, profileData: action.payload.data }
        case 'name' || 'email' || 'birthday' || 'gender' || 'password':
            return { ...state, profileData: action.payload.data }
        case Actions.EVENT_DATA:
            return { ...state, Event_Data: action.payload.data }
        case Actions.CATEGORY_MODAL:
            return { ...state, categoryData: action.payload.data }
        case Actions.CATEGORY_MODAL_PART2:
            return { ...state, categoryDataType2: action.payload.data }
        case Actions.SAVED_CATEGORIES:
            return { ...state, savedCategories: action.payload.data }
        case Actions.SELECTED:
            return { ...state, selected: action.payload.data }
        case Actions.GET_DURATION:
            return { ...state, duration: action.payload.duration }
        default:
            return state
    }
}

export const reducer = combineReducers({
    Reducer: Reducer
});