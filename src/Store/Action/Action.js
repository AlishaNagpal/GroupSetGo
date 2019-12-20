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

export const categoryModalData = () => {
    return (dispatch, getState) => {
        const { categoryData } = getState().Reducer;
        dispatch({ type: Actions.CATEGORY_MODAL, payload: { data: categoryData } });
    }
}

export const categoryModalDataPart2 = () => {
    return (dispatch, getState) => {
        const { categoryDataType2 } = getState().Reducer;
        dispatch({ type: Actions.CATEGORY_MODAL_PART2, payload: { data: categoryDataType2 } });
    }
}

export const saveCategoryData = (value) =>{
    return (dispatch, getState) => {
        const { savedCategories } = getState().Reducer;
        let emptyArray = savedCategories;
        emptyArray = emptyArray.slice();
        emptyArray.push(value)
        dispatch({ type: Actions.SAVED_CATEGORIES, payload: { data: emptyArray } });
    }
}

export const getCategoryData = () =>{
    return (dispatch, getState) => {
        const { savedCategories } = getState().Reducer;
        let emptyArray = savedCategories;
        emptyArray = emptyArray.slice();
        dispatch({ type: Actions.SAVED_CATEGORIES, payload: { data: emptyArray } });
    }
}


export const SELECTED = (value) => {
    return (dispatch) => {
        dispatch({ type: Actions.SELECTED, payload: { data: value } });
    }
}