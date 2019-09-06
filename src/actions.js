import {
    CHANGE_SEARCH_FIELD,
    REQUESTS_ROBOTS_PENDING,
    REQUESTS_ROBOTS_SUCCESS,
    REQUESTS_ROBOTS_FAILED,
    robotsUrl
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () =>  (dispatch) => {
    dispatch({
        type: REQUESTS_ROBOTS_PENDING,
    });
    fetch(robotsUrl)
    .then(res => res.json())
    .then(data => dispatch({
        type: REQUESTS_ROBOTS_SUCCESS,
        payload: data
    }))
    .catch(error => dispatch({
        type: REQUESTS_ROBOTS_FAILED,
        payload: error
    }))
}

