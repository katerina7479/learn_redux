var Redux = require('redux');

console.log('Starting Redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: []
}

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          action.hobby
        ]
      }
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby != action.hobby)
      }
    default:
      return state;
  }
};

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
