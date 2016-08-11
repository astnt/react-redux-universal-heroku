import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';

export class ListLayout extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <section>
          {this.props.children}
        </section>
        <article>
          List Layout
        </article>
      </header>
    )
  }
}