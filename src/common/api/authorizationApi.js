import firebase from 'firebase'

let provider;
if (process.env.BROWSER) {
  provider = new firebase.auth.GoogleAuthProvider();
}

export async function authorizeWithGoogleApi() {
  await firebase.auth().signInWithRedirect(provider);
}

export async function authorizeRedirectResultApi() {
  await firebase.auth().getRedirectResult();
}