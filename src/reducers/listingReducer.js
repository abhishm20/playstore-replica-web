import {CHECK_SCRAPPING_STATUS, FETCHING_APPS_SUCCESS, FETCHING_APPS_FAILURE, SCRAP_APPS, FETCHING_APPS_PENDING} from '../actions/types';

const initialState = {
    appsList: [],
    isScraping: false,
    isLoadingApps: false,
    scrapingError: "",
    error: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_APPS_PENDING:
            return {
                ...state,
                isLoadingApps: action.payload.isLoadingApps
            };
        case FETCHING_APPS_SUCCESS:
            return {
                ...state,
                isLoadingApps: action.payload.isLoadingApps,
                appsList: action.payload.appsList
            };
        case FETCHING_APPS_FAILURE:
            return {
                ...state,
                isLoadingApps: action.payload.isLoadingApps,
                error: action.payload.error
            }
        case SCRAP_APPS:
            return {
                ...state,
                isScraping: true
            };
        case CHECK_SCRAPPING_STATUS:
            return {
                ...state,
                scrapingError: action.payload.scrapingError,
                isScraping: action.payload.isScraping
            };
        default:
            return state;
    }
}
