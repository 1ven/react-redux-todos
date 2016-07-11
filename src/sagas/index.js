import { takeEvery } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import api from '../services/api';

function* fetchTodos() {
  try {
    const { body, lastUpdated } = yield call(api, '/todos', {
      method: 'GET',
    });
    yield put({
      type: 'TODOS_FETCH_SUCCESS',
      todos: body,
      lastUpdated,
    });
  } catch(err) {
    yield put({
      type: 'TODOS_FETCH_ERROR',
      error: err.message,
    });
  }
}

function* watchFetchTodos() {
  yield* takeEvery('TODOS_FETCH_REQUEST', fetchTodos);
}

function* removeTodo({ id }) {
  try {
    const { lastUpdated } = yield call(api, `/todos/${id}`, {
      method: 'DELETE',
    });
    yield put({
      type: 'TODOS_REMOVE_SUCCESS',
      lastUpdated,
      id,
    });
  } catch(err) {
    yield put({
      type: 'TODOS_REMOVE_ERROR',
      error: err.message,
    });
  }
}

function* watchRemoveTodo() {
  yield* takeEvery('TODOS_REMOVE_REQUEST', removeTodo);
}

function* createTodo({ title }) {
  try {
    const { body, lastUpdated } = yield call(api, '/todos', {
      method: 'POST',
      body: {
        title,
      },
    });
    yield put({
      type: 'TODOS_CREATE_SUCCESS',
      todo: body,
      lastUpdated,
    });
  } catch(err) {
    yield put({
      type: 'TODOS_CREATE_ERROR',
      error: err.message,
    });
  }
}

function* watchCreateTodo() {
  yield* takeEvery('TODOS_CREATE_REQUEST', createTodo);
}

function* toggleTodo({ id, completed }) {
  try {
    yield call(api, `/todos/${id}`, {
      method: 'PATCH',
      body: {
        completed,
      },
    });
    yield put({
      type: 'TODOS_TOGGLE_SUCCESS',
      id,
    });
  } catch(err) {
    yield put({
      type: 'TOODS_TOGGLE_ERROR',
      error: err.message,
    }); 
  }
}

function* watchToggleTodo() {
  yield* takeEvery('TODOS_TOGGLE_REQUEST', toggleTodo);
}

// implement multiple todo lists. and implement component with statistics by all todo lists.

export default function* rootSaga() {
  yield [
    watchFetchTodos(),
    watchRemoveTodo(),
    watchCreateTodo(),
    watchToggleTodo(),
  ];
}
