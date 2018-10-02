import React from "react";
import ProjectNav from "../ProjectNav/ProjectNav";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import getProjectList from "../getProjectList/getProjectList";
import getProjectLanguages from "../getProjectLanguages/getProjectLanguages";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      languageList: [],
      loaded: false
    };
  }
  componentDidMount() {
    //getProjectList().then(projList => this.setState({ projectList: projList }));
    this.setState({ projectList: getProjectList() });
    this.setState({ languageList: getProjectLanguages() });
  }

  render() {
    return (
      <div className="translations-container">
        <ProjectNav projectList={this.state.projectList} />
        <ProjectDetails languageList={this.state.languageList} />
      </div>
    );
  }
}

export default App;
