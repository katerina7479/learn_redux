var Redux = require('redux');
var thunk = require('redux-thunk').default;
var { nameReducer, hobbiesReducer, moviesReducer, mapReducer } = require('reducers/index')


export var configure = () => {
  var reducer = Redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  var store = Redux.createStore(reducer, Redux.compose(
    Redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
