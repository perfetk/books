import { updateActions } from '../Actions/actionTypes';

const initialState = {
    items: [],
}
export default function itemsListing(state = initialState, action) {
    switch (action.type) {
        case updateActions.LOAD_DATA:
            return {
                ...state,
                items: action.payload
            };
        case updateActions.UPDATE_RATING:
            // const currentItemIndex = state.items.indexOf(state.items.find((item) => item.id === action.payload.id));
            const ratedItems = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return (
                        {
                            ...item,
                           rating: action.payload.rating
                        }
                    )

                    } else {
                            return ({
                                ...item
                            })

                        }
                });
            return {
                ...state,
                items: ratedItems
            };
        default:
            return state;
    }
}