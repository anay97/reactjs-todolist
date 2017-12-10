import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component {
  render() {
      let todoItems;
    if(this.props.todos){
        todoItems=this.props.todos.map(todo=>{
            //console.log(project)
            return(
                <TodoItem key={todo.id} todo={todo} />
            )
        });
    }
    return (
      <div className="Todos">
        <h3>Latest Todos List:</h3><hr />
        {todoItems}

      </div>
    );
  }
}
Todos.propTypes={
    todos:propTypes.array
}
export default Todos;
