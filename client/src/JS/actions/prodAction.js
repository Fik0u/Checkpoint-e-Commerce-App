import axios from "axios";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_MY_PRODUCTS, GET_ONE_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT } from "../actionTypes/prodActionTypes";


// Action to add a product
export const addProd = (newProd) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.post("/api/product/addProd", newProd, config);
        dispatch({ type: ADD_PRODUCT, payload: result.data.newProduct });
        dispatch(getMyProds())
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};

// Action to get all products
export const getAllProds = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const result = await axios.get("/api/product/allProds");
        dispatch({ type: GET_PRODUCTS, payload: result.data.prodList})
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data})
    }
};

// Action to get one product
export const getOneProd = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const result = await axios.get(`/api/product/${id}`);
        dispatch({ type: GET_ONE_PRODUCT, payload: result.data.oneProd })
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};

// Action to get my products
export const getMyProds = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        };
        const result = await axios.get("/api/product/myProds", config);
        dispatch({ type: GET_MY_PRODUCTS, payload: result.data.myProdList })
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};

// Action to edit a product
export const editProd = (id, editedProd) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        };
        const result = await axios.put(`/api/product/${id}`, editedProd, config)
        dispatch({ type: EDIT_PRODUCT, payload: result.data.editedProd })
        dispatch(getMyProds())
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
};

// Action to delete a product
export const deleteProd = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        };
        const result = await axios.delete(`/api/product/${id}`, config);
        dispatch({ type: DELETE_PRODUCT, payload: result.data.deletedProd });
        dispatch(getMyProds())
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data })
    }
}
