import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_MY_PRODUCTS, GET_ONE_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT } from "../actionTypes/prodActionTypes";


const initialState = {
    loading: false,
    products: [],
    myProducts: [],
    product: {},
    success: false,
    error: null,
};


const prodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT: return { ...state, loading: true };
        case GET_PRODUCTS: return { ...state, loading: false, products: payload };
        case GET_ONE_PRODUCT: return { ...state, loading: false, product: payload };
        case GET_MY_PRODUCTS: return { ...state, loading: false, myProducts: payload };
        case ADD_PRODUCT: return { ...state, loading: false, products: [...state.products, payload], success: true };
        case EDIT_PRODUCT: return { ...state, loading: false, products: state.products.map((product) => product._id === payload._id ? {...product, ...payload} : product), success: true };
        case DELETE_PRODUCT: return { ...state, loading: false, products: state.products.filter((product) => product._id !== payload._id), success: true };
        case FAIL_PRODUCT: return { ...state, loading: false, error: payload };
        default: return state
    }
}


export default prodReducer;