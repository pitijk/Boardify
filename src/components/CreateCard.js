import React from "react";
import { createCard, insertingCardName, createCardInput } from "../actions";
import { connect } from "react-redux";
import CreateForm from "./CreateForm";

class CreateCard extends React.Component {
  handleSubmit = event => {
    if (this.props.input !== "") {
      this.props.insertingCardName(this.props.listName);
      this.props.createCard(this.props.listName, this.props.input);
      this.props.createCardInput("");
    }
    event.preventDefault();
  };

  onClick = () => {
    this.props.insertingCardName(this.props.listName);
  };

  render() {
    let isInserting;
    if (this.props.insideOf === this.props.listName && this.props.isInserting) {
      isInserting = true;
    } else {
      isInserting = false;
    }

    return (
      // Needed Props List: formType, inserting, input, toggleInserting(), handleSubmit(), inputActionCreator()
      <div className="create-card" onClick={e => e.stopPropagation()}>
        <CreateForm
          formType="card"
          inserting={isInserting}
          input={this.props.input}
          onClick={this.onClick}
          handleSubmit={this.handleSubmit}
          inputActionCreator={this.props.createCardInput}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    insideOf: state.forms.createCard.insideOf,
    isInserting: state.forms.createCard.isInserting,
    input: state.forms.createCard.input
  };
};
export default connect(
  mapStateToProps,
  { createCard, insertingCardName, createCardInput }
)(CreateCard);
