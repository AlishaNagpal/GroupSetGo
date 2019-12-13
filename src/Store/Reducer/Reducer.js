import { combineReducers } from "redux";
import * as Actions from '../../utils/ActionTypes'
import DATA from '../../DataSource'

const initialState = {
    date: "01-01-1990",
    Event_Data: DATA,
    aboutHeight: null,
    participantsHeight: null,
    settlementHeight: null,
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.PICK_DATE:
            return { ...state, date: action.payload.date }
        case Actions.EVENT_DATA:
            return { ...state, Event_Data: action.payload.data }
        case Actions.ABOUT_HEIGHT:
            return { ...state, aboutHeight: action.payload.aboutHeight }
        case Actions.PARTICIPANTS_HEIGHT:
            return { ...state, participantsHeight: action.payload.participantsHeight }
        case Actions.SETTLEMENT_HEIGHT:
            return { ...state, settlementHeight: action.payload.settlementHeight }
        default:
            return state
    }
}

export const reducer = combineReducers({
    Reducer: Reducer
});