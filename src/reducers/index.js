import { combineReducers } from 'redux';

const INITIAL_STATE = {
  items: [],
  isFetching: false,
  lastUpdated: undefined,
  error: false,
  visibilityFilter: 'SHOW_ALL',
};

function todosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TODOS_FETCH_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'TODOS_FETCH_SUCCESS':
      return {
        ...state,
        items: action.todos,
        isFetching: false,
        lastUpdated: action.lastUpdated,
        error: false,
      };
    case 'TODOS_FETCH_ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'TODOS_REMOVE_SUCCESS':
      return {
        ...state,
        items: state.items.filter(t => t.id != action.id),
        lastUpdated: action.lastUpdated,
      };
    case 'TODOS_CREATE_SUCCESS':
      return {
        ...state,
        items: [...state.items, action.todo],
        lastUpdated: action.lastUpdated,
      };
    case 'TODOS_SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.filter,
      };
    // should rename from plural to singular
    case 'TODOS_TOGGLE_SUCCESS':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id !== action.id) {
            return item;
          }
          return {
            ...item,
            completed: !item.completed,
          };
        }),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
