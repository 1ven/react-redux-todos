import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions';
import TodoCreator from '../components/TodoCreator';
import TodosContainer from './TodosContainer';
import FiltersContainer from './FiltersContainer';

function App({ onTodoCreatorSubmit, onBtnClick }) {
  return (
    <div className="b-app">
      <FiltersContainer />
      <TodosContainer />
      <TodoCreator onSubmit={onTodoCreatorSubmit} />
      <button onClick={onBtnClick}>Click</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoCreatorSubmit(title) {
      dispatch(createTodo(title));
    },
    onBtnClick() {
      dispatch({
        type: 'EMPTY_ACTION',
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
