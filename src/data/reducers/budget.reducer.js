import {
    SET_SELECTED_CATEGORY_ID,
    SET_TRANSACTION_DETAILS_ID,
} from 'data/constans'


const initialState = {
    selectedCategoryId: undefined,
    selectedTransactionId: [],
}

function budget(state = initialState, action) {


    switch (action.type) {

        case SET_SELECTED_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: action.payload,
            }
        case SET_TRANSACTION_DETAILS_ID:
            return {
                ...state,
                selectedTransactionId:
                    action.payload,


            }

        default:
            return state
    }

}
export default budget;
