import * as Actions from '../../utils/ActionTypes'
import * as Default from '../../DataSourceForProfile'

export const setProfileData = (name, email, profilePic, mytype) => {
    return (dispatch, getState) => {
        const { profileData } = getState().Reducer;
        let emptyArray = profileData;
        emptyArray.name = name;
        emptyArray.email = email;
        emptyArray.profilePic = profilePic;
        emptyArray.type = mytype;
        dispatch({ type: 'profileData', payload: { data: emptyArray } });
    }
}

export const setData = (key, value) => {
    return (dispatch, getState) => {
        const { profileData } = getState().Reducer;
        let emptyArray = profileData;
        emptyArray[key] = value
        dispatch({ type: key, payload: { data: emptyArray } });
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


export const makingAnEvent = (value) => {
    return (dispatch, getState) => {
        const { Event_Data } = getState().Reducer;
        let emptyArray = Event_Data;
        emptyArray = emptyArray.slice();
        emptyArray.push(value)
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

export const saveCategoryData = (value) => {
    return (dispatch, getState) => {
        const { savedCategories } = getState().Reducer;
        let emptyArray = savedCategories;
        emptyArray = emptyArray.slice();
        emptyArray.push(value)
        dispatch({ type: Actions.SAVED_CATEGORIES, payload: { data: emptyArray } });
    }
}

export const getCategoryData = () => {
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

export const SavedEvents = (value) => {
    return (dispatch, getState) => {
        const { savedEvents } = getState().Reducer;
        let emptyArray = savedEvents;
        emptyArray = emptyArray.slice();
        emptyArray.push(value)
        dispatch({ type: Actions.GETTING_SAVED, payload: { data: emptyArray } });
    }
}

export const GetSavedEvents = () => {
    return (dispatch, getState) => {
        const { savedEvents } = getState().Reducer;
        dispatch({ type: Actions.GETTING_SAVED, payload: { data: savedEvents } });
    }
}

export const Logout = () => {
    return (dispatch) => {
        let emptyArray = Default.DEFAULT
        dispatch({ type: 'userlogout', payload: { data: emptyArray } });
    }
}

export const getAddress = (value) => {
    return (dispatch) => {
        dispatch({ type: Actions.GETTING_ADDRESS, payload: { data: value } });
    }
}

export const DURATION_SELECTED = (value) => {
    return (dispatch) => {
        dispatch({ type: Actions.GET_DURATION, payload: { duration: value } });
    }
}

export const gettingEventDate = (value) => {
    return (dispatch) => {
        dispatch({ type: Actions.EVENT_START_DATE, payload: { data: value } });
    }
}