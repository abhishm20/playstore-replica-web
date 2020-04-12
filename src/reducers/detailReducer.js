import {FETCHING_APP_DETAIL_FAILURE, FETCHING_APP_DETAIL_PENDING, FETCHING_APP_DETAIL_SUCCESS} from '../actions/types';

const initialState = {
    app_detail: {},
    isLoading: false,
    error: ""
};

export default function (state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case FETCHING_APP_DETAIL_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_APP_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                app_detail: action.payload.app_detail
            };
        case FETCHING_APP_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
