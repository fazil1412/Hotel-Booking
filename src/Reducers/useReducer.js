
export const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload,
        };
        case "LOGOUT":
          return {user:[]}
    //   case "ADMINLOGIN":
    //     return {
    //       ...state,
    //       admin: action.payload,
    //     };
    //   case "STUDENT_LOGOUT":
    //     return {
    //       ...state,
    //       student:[],
    //     };
    //   case "ADMIN_LOGOUT":
    //     return {
    //       ...state,
    //       admin:[],
    //     };
    //     case "ACCEPT_REQ":
    //       return {
    //         ...state,
    //         admin:{...state.admin,approvedReq:action.payload}
    //       }
      default:
        return state;
    }
  };
  
  
  
  
  