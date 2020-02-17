import { updateActions } from './actionTypes';

export function updateRating(number, id) {
    return {
        type: updateActions.UPDATE_RATING,
        payload: {
            rating: number,
            id: id
        }
    }
}

export function loadData(data) {
    return {
        type: updateActions.LOAD_DATA,
        payload: data
    }
}