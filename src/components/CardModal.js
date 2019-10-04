import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {
  hideModalCard,
  deleteCard,
  cardDescriptionInput,
  insertingCardDescription,
  notInsertingCardDescription
} from "../actions";

class CardModal extends React.Component {
  onDeleteClick = () => {
    this.props.hideModalCard();
    this.props.deleteCard(this.props.cardName);
    document.body.classList.remove("modal-up");
  };

  handleSubmit = event => {
    this.props.notInsertingCardDescription();
    event.preventDefault();
  };
  onDescriptionClick = event => {
    event.stopPropagation();
    this.props.insertingCardDescription();
  };
  renderDescription() {
    if (this.props.inserting) {
      return (
        <form
          onSubmit={this.handleSubmit}
          className="desc-form"
          onClick={e => e.stopPropagation()}
        >
          <input
            className="desc-input"
            onChange={e =>
              this.props.cardDescriptionInput(
                this.props.cardName,
                e.target.value
              )
            }
            type="text"
            placeholder={
              this.props.description || "Add a more detailed description..."
            }
            value={this.props.description}
          />
          <input value="Save" type="submit" className="button desc-button" />
        </form>
      );
    } else {
      return (
        <p className="description" onClick={this.onDescriptionClick}>
          {this.props.description || "Add a more detailed description..."}
        </p>
      );
    }
  }
  onBackgroundClick = event => {
    event.stopPropagation();
    this.props.notInsertingCardDescription();
    this.props.hideModalCard();
    document.body.classList.remove("modal-up");
  };
  onContainerClick = event => {
    event.stopPropagation();
    this.props.notInsertingCardDescription();
  };
  render() {
    return ReactDOM.createPortal(
      <div onClick={this.onBackgroundClick} className="modal-bg">
        <div onClick={this.onContainerClick} className="modal-container">
          <div className="modal-header">
            <h2 onClick={e => e.stopPropagation()} className="card-name">
              {this.props.cardName}
            </h2>
            <div onClick={e => e.stopPropagation()} className="icons">
              <button className="button-icon" onClick={this.onDeleteClick}>
                <i className="fas fa-trash fa-2x"></i>
              </button>
              <button className="button-icon" onClick={this.onBackgroundClick}>
                <i className="fas fa-times fa-2x"></i>
              </button>
            </div>
          </div>
          <div className="content">
            <h3 className="small-header">Description</h3>
            {this.renderDescription()}
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

const mapStateToProps = state => {
  const name = state.modalCard.cardName;
  return {
    cardName: name,
    inserting: state.forms.insertingCardDescription,
    description: state.cards.filter(card => card.cardName === name)[0]
      .description
  };
};

export default connect(
  mapStateToProps,
  {
    hideModalCard,
    deleteCard,
    cardDescriptionInput,
    insertingCardDescription,
    notInsertingCardDescription
  }
)(CardModal);
