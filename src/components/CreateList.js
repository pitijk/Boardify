import React from "react";
import { createList, insertingListName, createListInput } from "../actions";
import { connect } from "react-redux";
import CreateForm from "./CreateForm";

class CreateList extends React.Component {
  handleSubmit = event => {
    if (this.props.input !== "") {
      this.props.insertingListName();
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
        onClick={this.props.insertingListName}
        handleSubmit={this.handleSubmit}
        inputActionCreator={this.props.createListInput}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    inserting: state.forms.createList.isInserting,
    input: state.forms.createList.input
  };
};
export default connect(
  mapStateToProps,
  { createList, insertingListName, createListInput }
)(CreateList);
