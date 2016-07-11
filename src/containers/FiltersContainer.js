import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Filters from '../components/Filters';

// Write github issue
function mapStateToProps(state) {
  const { visibilityFilter } = state.todos;

  return {
    filters: [{
      title: 'All',
      value: 'SHOW_ALL',
      active: visibilityFilter === 'SHOW_ALL',
    }, {
      title: 'Completed',
      value: 'SHOW_COMPLETED',
      active: visibilityFilter === 'SHOW_COMPLETED',
    }, {
      title: 'Active',
      value: 'SHOW_ACTIVE',
      active: visibilityFilter === 'SHOW_ACTIVE',
    }],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterClick(value) {
      dispatch(setVisibilityFilter(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
