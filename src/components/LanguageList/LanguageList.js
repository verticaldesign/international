import React, { Component } from "react";
import "./LanguageList.css";

class LanguageList extends Component {
  buildLanguageRows() {
    return this.props.languageList.map(lang => {
      return (
        <div className="language-row">
          <div className="language-row-name">
            <input type="checkbox" checked={lang.selected} />
            {lang.language_name}
          </div>
          <div>100%</div>
          <div className="edit-language" />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" />
        <div className="language-list-container">
          {this.buildLanguageRows()}
        </div>
      </div>
    );
  }
}

export default LanguageList;
