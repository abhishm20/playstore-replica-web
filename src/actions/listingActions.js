import {
    CHECK_SCRAPPING_STATUS,
    FETCHING_APPS_FAILURE,
    FETCHING_APPS_PENDING,
    FETCHING_APPS_SUCCESS,
    SCRAP_APPS
} from "./types";
import {AppService} from "../services/index";

export const startFetchingApps = () => dispatch => {
    dispatch({
        type: FETCHING_APPS_PENDING,
        payload: {isLoadingApps: true}
    });

    AppService.getList().then((res) => {
        if (res.status === 200) {
            res.json().then((d) => {
                dispatch({
                    type: FETCHING_APPS_SUCCESS,
                    payload: {isLoadingApps: false, appsList: d}
                });
            })

        } else {
            res.text().then((err) => {
                dispatch({
                    type: FETCHING_APPS_FAILURE,
                    payload: {isLoadingApps: false, error: err}
                });
            })

        }

    })
};

export const scrapApps = () => dispatch => {
    dispatch({
        type: SCRAP_APPS,
        payload: {isScraping: true}
    });
    AppService.scrapApps().then((res) => {
        if (res.status === 200) {
            dispatch({
                type: SCRAP_APPS,
                payload: {isScraping: false}
            });
        } else {
            dispatch({
                type: SCRAP_APPS,
                payload: {isScraping: false}
            });
        }

    })
};

export const checkScrapingStatus = () => dispatch => {
    dispatch({
        type: CHECK_SCRAPPING_STATUS,
        payload: {}
    });
    AppService.checkScrapingStatus().then((res) => {
        res.json().then((d) => {
            dispatch({
                type: CHECK_SCRAPPING_STATUS,
                payload: {isScraping: d.data.is_scraping_running, scrapingError: d.data.error_while_scraping}
            });
        });

    })
};
