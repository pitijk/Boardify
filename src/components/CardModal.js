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
  };

  handleSubmit = event => {
    this.props.notInsertingCardDescription();
    event.preventDefault();
  };
  renderDescription() {
    if (this.props.inserting) {
      return (
        <form onSubmit={this.handleSubmit} className="ui form">
          <input
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
          <input value="Save" type="submit" className="ui submit button" />
        </form>
      );
    } else {
      return (
        <p>{this.props.description || "Add a more detailed description..."}</p>
      );
    }
  }
  render() {
    return ReactDOM.createPortal(
      <div onClick={e => e.stopPropagation()} className="ui active modal">
        <div className="header">
          <div className="bold">{this.props.cardName}</div>
          <button onClick={this.onDeleteClick} className="ui icon button">
            <i className="trash icon"></i>
          </button>
          <button onClick={this.props.hideModalCard} className="ui icon button">
            <i className="close icon"></i>
          </button>
        </div>
        <div className="content">
          <div className="ui header">Description</div>
          <div onClick={this.props.insertingCardDescription}>
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
