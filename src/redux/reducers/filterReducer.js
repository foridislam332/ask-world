import { TAG_FILTERING, TOGGLE_BUTTON } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        buttons: [],
        date: []
    },
    tags: []
}

export const filterReducer = (state = initialState, action) => {
    const selectedTag = state.tags.find((tag) => tag === action.payload)
    switch (action.type) {
        case TOGGLE_BUTTON:
            if (!state.filters.buttons.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        buttons: [action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        buttons: state.filters.buttons.filter(button => button !== action.payload)
                    }
                }
            };

        case TAG_FILTERING:
            if (selectedTag) {
                return {
                    ...state,
                    tags: state.tags.filter((tag) => tag !== action.payload)
                }
            } else {
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                }
            }


        default:
            return state
    }
}