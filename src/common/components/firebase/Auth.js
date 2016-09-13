import React, {Component, PropTypes} from 'react'
import firebase from 'firebase'
import {connect} from 'react-redux'

import config from './firebaseConfig'
import {authWithGoogle} from "../../actions/authorization";
import {authRedirectResult} from "../../actions/authorization";

const app = firebase.initializeApp(config);

console.log('process.env.BROWSER', process.env.BROWSER);

@connect(state => {
  return {
    authorization: state.authorization
  }
})
export class Auth extends Component {

  loginWithGoogle = () => {
    const {dispatch} = this.props;
    dispatch(authWithGoogle())
  };

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(authRedirectResult())
  }

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