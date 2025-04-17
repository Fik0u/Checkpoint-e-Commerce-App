// To avoid making typos in action types, we define them as constants and export them. This way, we can import them in our action creators and reducers.

export const SUCCESS_AUTH = 'SUCCESS_AUTH'; 
export const FAIL_AUTH = 'FAIL_AUTH'; 
export const LOAD_AUTH = 'LOAD_AUTH'; 
export const CURRENT_AUTH = 'CURRENT_AUTH'; 
export const LOGOUT_AUTH = 'LOGOUT_AUTH'; 

export const CLEAR_SUCCESS_AUTH = 'CLEAR_SUCCESS_AUTH';
export const CLEAR_ERRORS_AUTH = 'CLEAR_ERRORS_AUTH';