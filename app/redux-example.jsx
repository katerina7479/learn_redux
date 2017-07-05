var Redux = require('redux');
var axios = require('axios');

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

var mapReducer = (state = { isFetching: false, url: undefined }, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state
  }
}

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

var fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function (res) {
    var loc = res.data.loc;
    var baseUrl = 'http://maps.google.com?q='
    store.dispatch(completeLocationFetch(baseUrl + loc));
  })
}

var reducer = Redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});

// STORE
var store = Redux.createStore(reducer, Redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your map</a>'
  } else {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your map</a>'
  }
})
//unsubscribe();
fetchLocation()

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
