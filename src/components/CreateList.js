import React from "react";
import {
  createList,
  toggleInsertingListName,
  createListInput
} from "../actions";
import { connect } from "react-redux";
import CreateForm from "./CreateForm";

class CreateList extends React.Component {
  handleSubmit = event => {
    if (this.props.input !== "") {
      this.props.toggleInsertingListName();
      this.props.createList(this.props.input);
      this.props.createListInput("");
    }
    event.preventDefault();
  };

  // Needed Props List: formType, inserting, input, toggleInserting(), handleSubmit(), inputActionCreator()
  render() {
    return (
      <CreateForm
        formType="list"
        inserting={this.props.inserting}
        input={this.props.input}
        onClick={this.props.toggleInsertingListName}
        handleSubmit={this.handleSubmit}
        inputActionCreator={this.props.createListInput}
      />
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
