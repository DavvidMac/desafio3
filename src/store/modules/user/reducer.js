export default function user(state = {}, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        state = action.values
        return state
  
      default:
        return state
    }
  }