import {FETCHING_APP_DETAIL_FAILURE, FETCHING_APP_DETAIL_PENDING, FETCHING_APP_DETAIL_SUCCESS,} from "./types";
import {AppService} from "../services/index";

export const getAppDetail = (package_name) => dispatch => {
    dispatch({
        type: FETCHING_APP_DETAIL_PENDING,
        payload: {}
    });

    AppService.getAppDetail(package_name).then((res) => {
        if (res.status === 200)
            res.json().then((d) => {
                dispatch({
                    type: FETCHING_APP_DETAIL_SUCCESS,
                    payload: {app_detail: d}
                });
            })
        else
            res.text().then((err) => {
                dispatch({
                    type: FETCHING_APP_DETAIL_FAILURE,
                    payload: {error: err}
                })
            });
    })
};
