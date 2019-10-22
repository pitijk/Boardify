import React from "react";
import { connect } from "react-redux";
import { editCardDescription, hideModal, deleteCard } from "../actions";

class CardModal extends React.Component {
  state = { isInserting: false, inputValue: this.props.description };

  componentDidUpdate() {
    if (this.state.isInserting) {
      this.input.focus();
    }
  }

  toggleInserting = () => {
    this.setState({ isInserting: !this.state.isInserting });
  };

  handleSubmit = event => {
    event.preventDefault();
    //editCardDescription = (cardId, listId, description)
    const { cardId, listId } = this.props;
    this.props.editCardDescription(cardId, listId, this.state.inputValue);
    this.toggleInserting();
  };
  renderDescription() {
    if (this.state.isInserting) {
      return (
        <form
          onSubmit={this.handleSubmit}
          className="desc-form"
          onClick={e => e.stopPropagation()}
        >
          <textarea
            onSubmit={this.handleSubmit}
            onChange={e => this.setState({ inputValue: e.target.value })}
            value={this.state.inputValue}
            ref={el => (this.input = el)}
            onBlur={this.handleSubmit}
            className="description--input"
            type="text"
            placeholder={
              this.props.description || "Add a more detailed description..."
            }
          />
          <input value="Save" type="submit" className="button desc-button" />
        </form>
      );
    } else {
      return (
        <p className="description" onClick={this.toggleInserting}>
          {this.props.description || "Add a more detailed description..."}
        </p>
      );
    }
  }
  onDeleteClick = () => {
    this.props.hideModal();
    const { cardId, listId } = this.props;
    // deleteCard = (cardId, listId)
    this.props.deleteCard(cardId, listId);
  };
  onCloseClick = () => {
    this.props.hideModal();
  };
  render() {
    return (
      <>
        <div className="modal-header">
          <h2 className="card-name">{this.props.name}</h2>
          <div className="icons">
            <button className="button-icon" onClick={this.onDeleteClick}>
              <i className="fas fa-trash fa-2x"></i>
            </button>
            <button className="button-icon" onClick={this.onCloseClick}>
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
        </div>
        <div className="content">
          <h3 className="small-header">Description</h3>
          {this.renderDescription()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { listId, cardId } = state.modal;
  try {
    const { name, description } = state.lists
      .find(list => list.id === listId)
      .cards.find(card => card.id === cardId);
    return { name, description, cardId, listId };
  } catch (error) {
    console.log(error);
  }
};

export default connect(
  mapStateToProps,
  { editCardDescription, hideModal, deleteCard }
)(CardModal);
