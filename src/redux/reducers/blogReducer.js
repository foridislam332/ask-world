import { ALREADY_READ, READ_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    reads: []
}

const blogReducer = (state = initialState, action) => {
    const selected = state.reads.find((read) => read._id === action.payload._id);
    switch (action.type) {
        case READ_BLOG:
            if (selected) {
                return {
                    ...state,
                    reads: [...state.reads]
                }
            } else {
                return {
                    ...state,
                    reads: [...state.reads, action.payload]
                }
            };

        case ALREADY_READ:
            return {
                ...state,
                reads: state.reads.filter((read) => read._id !== action.payload)
            }

        default:
            return state
    }
}

export default blogReducer;