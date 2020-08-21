const BASE_API = 'http://localhost:5000/api';

//Auth API
export const LOGIN_API = `${BASE_API}/login`;
export const REGISTER_API = `${BASE_API}/register`;

//Services API
const SERVICES_API = `${BASE_API}/services`;
export const GET_ALL_SERVICES_API = `${SERVICES_API}/all`;

//Slots API
const SLOTS_API = `${BASE_API}/slots`;
export const GET_ALL_SLOTS_API = `${SLOTS_API}/all`;