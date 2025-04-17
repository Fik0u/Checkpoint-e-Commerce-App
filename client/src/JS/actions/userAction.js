import axios from "axios"
import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/userActionTypes"



export const getUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }
        const result = await axios.get('/api/user/allUsers', config);
        dispatch({ type: GET_ALL_USERS, payload: result.data.usersList });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors})
    }
}

export const getOne = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }
        const result = await axios.get(`/api/user/${id}`, config);
        dispatch({ type: GET_USER, payload: result.data.getUser })
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors})
    }

}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }
        const result = await axios.delete(`/api/user/${id}`, config);
        dispatch({ type: DELETE_USER, payload: result.data.deletedUser});
        dispatch(getUsers())
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors})
    }
}