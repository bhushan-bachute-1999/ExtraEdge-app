export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export function addUser(data) {
    return {
        type: ADD_USER,
        data: data
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function editUserDetails(data, id) {
    return {
        type: EDIT_PROFILE,
        data,
        id
    }
}

export function toggleLoading() {
    console.log('toggleLoading');
    return {
        type: TOGGLE_LOADING
    }
}
