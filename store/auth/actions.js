export const actionTypes = {
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
}

export function loginFailure(error) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error,
  }
}

export function loginSussess(error) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    error,
  }
}

export function login() {
  return { type: actionTypes.LOGIN }
}
