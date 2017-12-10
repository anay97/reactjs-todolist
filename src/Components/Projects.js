import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import propTypes from 'prop-types';

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
  render() {
      let projectItems;
    if(this.props.projects){
        projectItems=this.props.projects.map(project=>{
            //console.log(project)
            return(
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
            )
        });
    }
    return (
      <div className="Projects">
        <h3>Latest projects:</h3><hr />
        {projectItems}

      </div>
    );
  }
}
Projects.propTypes={
    projects:propTypes.array,
    onDelete:propTypes.func
}
export default Projects;
