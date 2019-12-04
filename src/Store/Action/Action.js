import * as Actions from '../../utils/ActionTypes'

export const pickDate = (date) =>{
    return(dispatch) =>{
        dispatch({type: Actions.PICK_DATE, payload:{date: date }})
    }
}
