import * as Actions from '../../utils/ActionTypes'

export const pickDate = (date) => {
    return (dispatch) => {
        dispatch({ type: Actions.PICK_DATE, payload: { date: date } })
    }
}

export const eventDATA = () => {
    return (dispatch, getState) => {
        const { Event_Data } = getState().Reducer;
        let emptyArray = Event_Data;
        emptyArray = emptyArray.slice();
        dispatch({ type: Actions.EVENT_DATA, payload: { data: emptyArray } });
    }
}
