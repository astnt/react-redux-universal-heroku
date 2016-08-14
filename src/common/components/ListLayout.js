import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {fetchListIfNeeded} from "../actions/fetchList";

@connect(state => {
  return {
    apiList: state.apiList
  };
})
export class ListLayout extends Component {

  componentDidMount() {
    const {dispatch, params} = this.props;
    dispatch(ListLayout.fetchInitialComponentData(params));
  }

  static fetchInitialComponentData(params) {
    return fetchListIfNeeded(params);
  }

  render() {
    const {apiList} = this.props;
    const {items} = apiList;
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
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>{item.text}</li>
            )
          })}
        </ul>
      </header>
    )
  }
}