import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import Todos from '../components/Todos';

class TodosContainer extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    const { ids, isFetching, lastUpdated, error } = this.props;
    return error ? (
      <div className="b-error">Error: {error}</div>
    ) : isFetching || !lastUpdated ? (
      <div>Loading...</div>
    ) : (
      <Todos ids={ids} />
    );
  }
};

function mapStateToProps(state, ownProps) {
  const { items, visibilityFilter, isFetching, lastUpdated, error } = state.todos;
  return {
    ids: getVisibleTodos(items, visibilityFilter).map(t => t.id),
    isFetching,
    lastUpdated,
    error,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchTodos() {
      dispatch(fetchTodos());
    }
  };
}

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
