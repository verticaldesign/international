import React, { Component } from "react";
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import "./projectNav.css";

class ProjectNav extends Component {
  render() {
    return (
      <header className="translations-header">
        <ProjectSelector
          className="project-selector"
          projectList={this.props.projectList}
        />
        <div className="header-item">Translations</div>
        <div className="header-item">Admin</div>
        <div className="header-item home" />
      </header>
    );
  }
}

export default ProjectNav;
