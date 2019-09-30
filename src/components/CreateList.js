import React from "react";
import {
  createList,
  toggleInsertingListName,
  createListInput
} from "../actions";
import { connect } from "react-redux";

class CreateList extends React.Component {
  handleSubmit = event => {
    if (this.props.input !== "") {
      this.props.toggleInsertingListName();
      this.props.createList(this.props.input);
      this.props.createListInput("");
    }
    event.preventDefault();
  };

  renderCreateList() {
    if (!this.props.inserting) {
      return (
        <button
          className="ui button"
          onClick={this.props.toggleInsertingListName}
        >
          + Create another list
        </button>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="ui action input">
          <input
            onChange={e => this.props.createListInput(e.target.value)}
            type="text"
            placeholder="Enter list title..."
            value={this.props.input}
          />
          <input
            value="+ Add another list"
            type="submit"
            className="ui button green"
          />
        </form>
      );
    }
  }
  render() {
    return (
      <div onClick={e => e.stopPropagation()}>{this.renderCreateList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inserting: state.insertingListName,
    input: state.createListInput
  };
};
export default connect(
  mapStateToProps,
  { createList, toggleInsertingListName, createListInput }
)(CreateList);
