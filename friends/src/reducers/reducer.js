import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';


const initialState = {
    friends:[],
    isLoading: false,
    error: '',
    isLoggingIn: false
}

export const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }

        default:
        return state;
    }
}