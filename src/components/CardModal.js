import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { hideCard, deleteCard } from "../actions";

class CardModal extends React.Component {
  onDeleteClick = () => {
    this.props.hideCard();
    this.props.deleteCard(this.props.cardName);
  };
  render() {
    return ReactDOM.createPortal(
      <div className="ui active modal">
        <div className="header">
          <div className="bold">{this.props.cardName}</div>
          <button onClick={this.onDeleteClick} className="ui icon button">
            <i className="trash icon"></i>
          </button>
          <button onClick={this.props.hideCard} className="ui icon button">
            <i className="close icon"></i>
          </button>
        </div>
        <div className="content">
          <p>lalalalallalalala</p>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

const mapStateToProps = state => {
  return { cardName: state.showingCard.cardName };
};

export default connect(
  mapStateToProps,
  { hideCard, deleteCard }
)(CardModal);
