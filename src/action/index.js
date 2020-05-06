import *as types from '../../tranning/constants/action';

export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}