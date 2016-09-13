import {AUTH_WITH_GOOGLE, AUTH_REDIRECT_RESULT} from "../actions/authorization"
import {AUTH_STATE_CHANGED} from "../actions/authorization";

export default function authorization(state = {
  google: {},
  isAuthorized: false,
  isAuthorizing: false,
}, action) {
  switch (action.type) {
    case AUTH_WITH_GOOGLE:
      if (action.ready) {
        return {
          ...state,
          ...{
            google: action.result,
            isAuthorizing: false,
          }
        }
      } else {
        return {
          ...state,
          ...{
            isAuthorizing: true,
          }
        }
      }

    case AUTH_REDIRECT_RESULT:
      if (action.ready) {
        return {
          ...state,
          ...{
            redirectResult: action.result,
            isAuthorizing: false,
            isAuthorized: !!action.result.credential,
          }
        }
      } else {
        return {
          ...state,
          ...{
            isAuthorizing: true,
          }
        }
      }

    case AUTH_STATE_CHANGED:
      return {
        ...state,
        ...{
          isAuthorizing: false,
          user: action.user,
          isAuthorized: !!action.user,
        }
      };

    default:
      return state
  }
}