export function loginRequest(values) {
    return {
      type: 'LOGIN_REQUEST',
      values
    }
  }
  
  export function loginSuccess(values) {
    console.log('Enviados ' + JSON.stringify(values))
    return {
      type: 'LOGIN_SUCCESS',
      values
    }
  }