import {authorizeWithGoogleApi} from "../api/authorizationApi";
import {authorizeRedirectResultApi} from "../api/authorizationApi";
export const AUTH_WITH_GOOGLE = 'AUTH_WITH_GOOGLE';
export const AUTH_REDIRECT_RESULT = 'AUTH_REDIRECT_RESULT';
export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';

export function authWithGoogle() {
  return {
    type: AUTH_WITH_GOOGLE,
    promise: authorizeWithGoogleApi(),
  }
}

export function authRedirectResult() {
  return {
    type: AUTH_REDIRECT_RESULT,
    promise: authorizeRedirectResultApi(),
  }
}

export function authStateChanged(user) {
  return {
    type: AUTH_STATE_CHANGED,
    user,
  }
}

