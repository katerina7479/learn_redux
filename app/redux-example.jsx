var Redux = require('redux');

console.log('Starting Redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        action.hobby
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby == action.hobby)
    default:
      return state
  }
}

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        action.movie
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie == action.movie)
    default:
      return state
  }
}

var reducer = Redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = Redux.createStore(reducer, Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("State", state)
})
//unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Katerina'
})
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Singing'
})
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
})
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Makeup'
})
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrea'
})
store.dispatch({
  type: 'REMOVE_HOBBY',
  hobby: 'Running'
})
store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Finding Nemo'
})
