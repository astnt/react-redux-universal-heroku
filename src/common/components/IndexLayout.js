import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

export class IndexLayout extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <section>
          {this.props.children}
        </section>
      </header>
    )
  }
}