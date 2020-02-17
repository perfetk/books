import { updateActions } from "../Actions/actionTypes";

export const defaultState = {
    ratedItems: []
}

export default function updateRating(state = defaultState, action) {
    switch (action.type) {
        case updateActions.UPDATE_RATING:
            return { ...state, ratedItems: action.payload };
        default:
            return state;
    }
}