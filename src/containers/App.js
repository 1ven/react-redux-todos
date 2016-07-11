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
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoCreatorSubmit(title) {
      dispatch(createTodo(title));
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
