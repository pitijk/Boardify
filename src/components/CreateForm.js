import React from "react";
import { connect } from "react-redux";
import { create } from "../actions";

function create_UUID() {
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

// passed through props: formType, Optional: listId
class CreateForm extends React.Component {
  state = { isInserting: false, inputValue: "" };

  toggleInserting = () => {
    this.setState({ isInserting: !this.state.isInserting });
  };

  componentDidUpdate() {
    if (this.state.isInserting) {
      this.input.focus();
      if (this.props.formType === "list") {
        this.input.scrollIntoView({ block: "center", inline: "start" });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue) {
      // create(typeToCreate, name, listId, cardId)
      this.props.create(
        this.props.formType,
        this.state.inputValue,
        this.props.listId || create_UUID(),
        create_UUID()
      );
      this.setState({ inputValue: "" });
    }
  };

  render() {
    if (!this.state.isInserting) {
      return (
        <button className="button-toggle" onClick={this.toggleInserting}>
          {`+ Add another ${this.props.formType}`}
        </button>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="create-form">
          <input
            onChange={e => this.setState({ inputValue: e.target.value })}
            value={this.state.inputValue}
            ref={el => (this.input = el)}
            onBlur={this.toggleInserting}
            type="text"
            placeholder={`Enter ${this.props.formType} title...`}
            className="input"
          />
          <button
            onMouseDown={this.handleSubmit}
            className="button"
          >{`Add ${this.props.formType}`}</button>
        </form>
      );
    }
  }
}

export default connect(
  null,
  { create }
)(CreateForm);
