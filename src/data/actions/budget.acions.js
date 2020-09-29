import {
    SET_SELECTED_CATEGORY_ID,
    SET_TRANSACTION_DETAILS_ID,
} from 'data/constans'


export const setTransacionDetails = (details) => {

    return {
        type: SET_TRANSACTION_DETAILS_ID,
        payload: details,
    }
}

export const setSelectedCategoryId = (id) => {
    return {
        type: SET_SELECTED_CATEGORY_ID,
        payload: id,
    }
}

