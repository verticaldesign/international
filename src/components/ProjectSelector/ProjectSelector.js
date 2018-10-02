import React, { Component } from "react";

let list = ["MOCI", "CBYO", "Satelite Predictor"];
class ProjectSelector extends Component {
  renderOptions() {
    let options = this.props.projectList.map(el => {
      return <option>{el.name}</option>;
    });
    return options;
  }
  render() {
    return (
      <label className={this.props.className}>
        Project
        <select>{this.renderOptions()}</select>
      </label>
    );
  }
}

export default ProjectSelector;
