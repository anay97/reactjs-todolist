import React, { Component } from 'react';
import propTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}:</strong>
      </li>
    );
  }
}
TodoItem.propTypes={
    todo:propTypes.object
}
export default TodoItem;
