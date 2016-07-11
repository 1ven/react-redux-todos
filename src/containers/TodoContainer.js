import React, { Component, PropTypes } from 'react';
import { removeTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

function mapStateToProps(state, ownProps) {
  return state.todos.items.filter(t => t.id === ownProps.id)[0];
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick(id, completed) {
      dispatch(toggleTodo(id, completed));
    },
    onRemoveClick(id) {
      dispatch(removeTodo(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
