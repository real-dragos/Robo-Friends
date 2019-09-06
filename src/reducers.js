import {
    CHANGE_SEARCH_FIELD,
    REQUESTS_ROBOTS_PENDING,
    REQUESTS_ROBOTS_SUCCESS,
    REQUESTS_ROBOTS_FAILED,
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) =>{
    switch(action.type) {
        case REQUESTS_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUESTS_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case REQUESTS_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}