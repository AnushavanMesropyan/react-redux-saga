import {CREATE_POST} from "./types";
import {showMessage} from "./actions";

const spamWords = ['php', 'js'];

export function spamWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = spamWords.filter(w=>{
                   return action.payload.title.includes(w)
                });
                if(found.length){
                    return dispatch(showMessage('You spam'))
                }
            }
            return next(action);
        }
    }
}