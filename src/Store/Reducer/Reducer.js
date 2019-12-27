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
    profileData: PROFILES.PROFILE,
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'profileData':
            return { ...state, profileData: action.payload.data }
        case 'name' || 'email' || 'birthday' || 'gender' || 'password':
            console.warn('reducer data ', action.payload.data)
            return { ...state, profileData: action.payload.data }
        // case 'setEmail':
        //     console.warn('reducer email ', action.payload.data.email)
        //     return { ...state, profileData: action.payload.data }
        // case 'setDate':
        //     console.warn('reducer date ', action.payload.data.birthday)
        //     return { ...state, profileData: action.payload.data }
        // case 'setGender':
        //     console.warn('reducer gender ', action.payload.data.gender)
        //     return { ...state, profileData: action.payload.data }
        // case 'setPassword':
        //     console.warn('reducer password ', action.payload.data.password)
        //     return { ...state, profileData: action.payload.data }
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
        default:
            return state
    }
}

export const reducer = combineReducers({
    Reducer: Reducer
});