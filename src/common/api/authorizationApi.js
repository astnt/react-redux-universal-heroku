import firebase from 'firebase'

let provider;
if (process.env.BROWSER) {
  provider = new firebase.auth.GoogleAuthProvider();
}

export async function authorizeWithGoogleApi() {
  return await firebase.auth().signInWithRedirect(provider);
}

export async function authorizeRedirectResultApi() {
  return await firebase.auth().getRedirectResult();
}