import { ALREADY_READ, READ_BLOG } from "../actionTypes/actionTypes"

export const readBlog = (date) => {
    return {
        type: READ_BLOG,
        payload: date
    }
}

export const alreadyRead = (id) => {
    return {
        type: ALREADY_READ,
        payload: id
    }
}