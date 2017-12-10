import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
  render() {
      console.log(this.props)
    return (
      <li className="Project">
        <strong>{this.props.project.title}:</strong>{this.props.project.category}
        <a onClick={this.deleteProject.bind(this,this.props.project.id)}> Delete</a>
      </li>
    );
  }
}
ProjectItem.propTypes={
    project:propTypes.object,
    onDelete:propTypes.func
}
export default ProjectItem;
