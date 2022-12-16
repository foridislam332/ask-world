import { TAG_FILTERING, TOGGLE_BUTTON, TOGGLE_DATE } from "../actionTypes/actionTypes"

export const toggleButton = (button) => {
    return {
        type: TOGGLE_BUTTON,
        payload: button,

    }
}

export const toggleDate = (date) => {
    return {
        type: TOGGLE_DATE,
        payload: date
    }
}

export const tagFiltering = (tag) => {
    return {
        type: TAG_FILTERING,
        payload: tag
    }
}