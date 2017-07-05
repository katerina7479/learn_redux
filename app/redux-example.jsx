var actions = require('actions/index');
var store = require('store/configureStore').configure();

console.log('Starting Redux example');

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
store.dispatch(actions.fetchLocation())

// DISPATCHERS
store.dispatch(actions.changeName('Katerina'));
store.dispatch(actions.addHobby('Singing'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Makeup'));
store.dispatch(actions.addMovie('Mad Max', 'Science Fiction'));
store.dispatch(actions.changeName('Andrea'));
store.dispatch(actions.removeHobby('Running'));
store.dispatch(actions.removeMovie('Mad Max'))
store.dispatch(actions.addMovie('Finding Nemo', 'Family'));
