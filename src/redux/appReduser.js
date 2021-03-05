import {HIDE_LOADER, HIDE_MESSAGE, SHOW_LOADER, SHOW_MESSAGE} from "./types";

const initialState = {
    loading: false,
    message: null,
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case SHOW_MESSAGE:
            return {...state, message: action.payload};
        case HIDE_MESSAGE:
            return {...state, message: null};
        default:
            return state;
    }
};