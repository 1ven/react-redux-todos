export function fetchTodos() {
  return {
    type: 'TODOS_FETCH_REQUEST',
  };
}

export function removeTodo(id) {
  return {
    type: 'TODOS_REMOVE_REQUEST',
    id,
  };
}

export function createTodo(title) {
  return {
    type: 'TODOS_CREATE_REQUEST',
    title,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'TODOS_SET_VISIBILITY_FILTER',
    filter,
  };
}

export function toggleTodo(id, completed) {
  return {
    type: 'TODOS_TOGGLE_REQUEST',
    completed,
    id,
  };
}
