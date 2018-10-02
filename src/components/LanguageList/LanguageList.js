import React, { Component } from "react";

class LanguageList extends Component {
  buildLanguageRows() {
		return this.props.languageList.map((lang) => {
			return <div>{lang.name}</div>;
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
