import React, { Component } from "react";
import LanguageList from "../LanguageList/LanguageList";
import "./projectDetails.css";

class ProjectDetails extends Component {
  render() {
    return (
      <main className="project-details-container">
        <section className="language-list">
          <LanguageList languageList={this.props.languageList}/>
        </section>
        <section className="translations-list">Translations</section>
        <section className="project-actions">export</section>
      </main>
    );
  }
}

export default ProjectDetails;
