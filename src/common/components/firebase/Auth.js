import React, {Component, PropTypes} from 'react'
import firebase from 'firebase'

import config from './firebaseConfig'

const app = firebase.initializeApp(config);

console.log('process.env.BROWSER', process.env.BROWSER);
let provider;
if (process.env.BROWSER) {
  provider = new firebase.auth.GoogleAuthProvider();
}

export class Auth extends Component {

  loginWithGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log('result', result);
    }).catch(function (error) {
      console.log('error', error);
    });
  };

  render() {
    return (
      <article>
        <header>
          <h1>Auth Page</h1>
        </header>
        <section>
          This is the auth page.
          <div>
            <button onClick={this.loginWithGoogle}>Log in</button>
          </div>
        </section>
      </article>
    )
  }
}