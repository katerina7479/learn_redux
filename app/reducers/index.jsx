export var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

export var hobbiesReducer = (state = [], action) => {
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

export var moviesReducer = (state = [], action) => {
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

export var mapReducer = (state = { isFetching: false, url: undefined }, action) => {
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
