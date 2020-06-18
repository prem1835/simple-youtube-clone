import React, { Component } from "react";
import "./VideoItem.css";

class SearchBar extends Component {
  state = { term: "" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    e.target.elements.inputField.blur();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment menu stackable">
        <div className="header item ui red label">
          <i className="video play icon big"></i>V Browser
        </div>
        <form className="ui form item mar" onSubmit={this.onFormSubmit}>
          <div className="field ui fluid icon input">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Video Search"
              name="inputField"
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
