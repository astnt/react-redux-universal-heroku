# React Redux Universal Boilerplate

Simple boilerplate with server-side rendering.

## Initial state for async

Define static method `fetchInitialComponentData` in component:

```js
export class List extends Component {

  static fetchInitialComponentData(params) {
    return fetchListIfNeeded(params); // Should to return promise from here
  }
  
}
```

Then use this component in route tree:

```jsx
<Route path="/list" component={List}/>
```

And don't forget to fetch same data at client side:

```js
export class List extends Component {

  componentDidMount() {
    const {dispatch, params} = this.props;
    dispatch(List.fetchInitialComponentData(params));
  }
  
}
```

## Deploy

This template is ready to deploy and run on Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/astnt/react-redux-universal-heroku)

## Demo

Demo app available at https://react-redux-universal-heroku.herokuapp.com/