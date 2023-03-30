import { combineReducers } from 'redux'
import { ADD_USER, DELETE_USER, EDIT_PROFILE, TOGGLE_LOADING } from '../actions/index';

const initialState = {
    users: [],
    isLoading: true
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                users: action.data
            }
        }
        case DELETE_USER: {
            let newUser = state.users.filter((user) => user.id !== action.id);
            return {
                ...state,
                users: newUser
            }
        }
        case EDIT_PROFILE: {
            const { phoneRef, nameRef, emailRef } = action.data;

            let newUser = state.users.map((user) => {
                if (action.id === user.id) {
                    console.log('Action data', action.data);
                    if (phoneRef) {
                        user.phone = phoneRef
                    }
                    if (emailRef) {
                        user.email = emailRef
                    }
                    if (nameRef) {
                        user.name = nameRef
                    }
                }
                return user;
            })
            return {
                ...state,
                users: newUser
            }
        }
        case TOGGLE_LOADING: {
            console.log('toggleLoading');
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer;