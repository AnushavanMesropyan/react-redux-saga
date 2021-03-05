import {CREATE_POST, FETCH_POST, HIDE_LOADER, HIDE_MESSAGE, REQUEST_POSTS, SHOW_LOADER, SHOW_MESSAGE} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showMessage(text) {
    return dispatch => {
        dispatch({
            type: SHOW_MESSAGE,
            payload: text
        });
        setTimeout(()=>{
            dispatch(hideMessage())
        },3000)
    }
}

export function hideMessage() {
    return {
        type: HIDE_MESSAGE,
    }
}

export function fetchPost() {
    return {
        type:REQUEST_POSTS
    }
   /* return async dispatch => {

        try {
            dispatch(showLoader());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json();
            dispatch({
                type: FETCH_POST,
                payload: json
            })
            dispatch(hideLoader());

    }catch (e) {
        dispatch(showMessage('Server problem'));
            dispatch(hideLoader());
    }
    }*/

}