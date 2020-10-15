const INITIAL_STATE = {
  userDetails: null,
  menuItems: []
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SET_USER_DETAILS':
      return{
        ...state,
        userDetails: action.payload
      }
      case 'SET_MENU_ITEMS':
        return{
          ...state,
          menuItems: action.payload
        }
    default:
      return state;
  }
}

export default userReducer;
