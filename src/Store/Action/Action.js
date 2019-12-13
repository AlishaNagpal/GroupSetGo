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


export const aboutHeightCalculate = (aboutHeight) => {
    return (dispatch) => {
        dispatch({ type: Actions.ABOUT_HEIGHT, payload: { aboutHeight: aboutHeight } })
    }
}

export const participantsHeightCalculate = (participantsHeight) => {
    return (dispatch) => {
        dispatch({ type: Actions.PARTICIPANTS_HEIGHT, payload: { participantsHeight: participantsHeight } })
    }
}

export const settlementHeightCalculate = (settlementHeight) => {
    return (dispatch) => {
        dispatch({ type: Actions.SETTLEMENT_HEIGHT, payload: { settlementHeight: settlementHeight } })
    }
}
