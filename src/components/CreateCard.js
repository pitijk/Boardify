import React from "react";
import {
  createCard,
  toggleInsertingCardName,
  createCardInput
} from "../actions";
import { connect } from "react-redux";
import CreateForm from "./CreateForm";

class CreateCard extends React.Component {
  handleSubmit = event => {
    if (this.props.input !== "") {
      this.props.toggleInsertingCardName();
      this.props.createCard(this.props.listName, this.props.input);
      this.props.createCardInput("");
    }
    event.preventDefault();
  };

  onClick = () => {
    this.props.toggleInsertingCardName(this.props.listName);
  };

  // Needed Props List: formType, inserting, input, toggleInserting(), handleSubmit(), inputActionCreator()
  render() {
    let isInserting;
    if (this.props.inserting.insideOf === this.props.listName) {
      isInserting = true;
    } else {
      isInserting = false;
    }

    return (
      <CreateForm
        formType="card"
        inserting={isInserting}
        input={this.props.input}
        onClick={this.onClick}
        handleSubmit={this.handleSubmit}
        inputActionCreator={this.props.createCardInput}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    inserting: state.insertingCardName,
    input: state.createCardInput
  };
};
export default connect(
  mapStateToProps,
  { createCard, toggleInsertingCardName, createCardInput }
)(CreateCard);
