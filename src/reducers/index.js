import {combineReducers} from 'redux';
import detailReducer from "./detailReducer";
import listingReducer from "./listingReducer";

const rootReducers = combineReducers({
    detailReducer: detailReducer,
    listingReducer: listingReducer
});

export default rootReducers;
