var Redux = require('redux');

console.log('Starting Redux example');

// REDUCERS
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

// Action Generators
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
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
      return state.filter((hobby) => hobby != action.hobby)
    default:
      return state
  }
}

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}
var removeHobby = (hobby) => {
  return {
    type: 'REMOVE_HOBBY',
    hobby
  }
}

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          name: action.name,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      console.log("removing movie", state)
      return state.filter((movie) => movie.name != action.name)
    default:
      return state
  }
}

var addMovie = (name, genre) => {
  return {
    type: 'ADD_MOVIE',
    name,
    genre
  }
}
var removeMovie = (name) => {
  return {
    type: 'REMOVE_MOVIE',
    name
  }
}

var reducer = Redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

// STORE
var store = Redux.createStore(reducer, Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("State", state)
})
//unsubscribe();


// DISPATCHERS
store.dispatch(changeName('Katerina'));
store.dispatch(addHobby('Singing'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Makeup'));
store.dispatch(addMovie('Mad Max', 'Science Fiction'));
store.dispatch(changeName('Andrea'));
store.dispatch(removeHobby('Running'));
store.dispatch(removeMovie('Mad Max'))
store.dispatch(addMovie('Finding Nemo', 'Family'));
