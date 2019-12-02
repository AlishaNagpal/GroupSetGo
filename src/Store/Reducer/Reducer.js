import { combineReducers } from "redux";
import * as Actions from '../../utils/ActionTypes'
const initialState = {
    date: new Date('1990-01-01T14:42:42') ,
    
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.PICK_DATE:
            return { ...state, date: action.payload.date }
        default:
            return state
    }
}

export const reducer = combineReducers({
    Reducer: Reducer
});