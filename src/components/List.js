import React from "react";
import CreateCard from "./CreateCard";
import Card from "./Card";
import { connect } from "react-redux";
import { notInsertingCardName, deleteList, deleteCards } from "../actions";

class List extends React.Component {
  renderCards() {
    const listsCards = this.props.cards.filter(
      card => card.insideOfList === this.props.title
    );
    return listsCards.map(card => {
      return <Card key={card.cardName} title={card.cardName} />;
    });
  }
  onListClick = event => {
    event.stopPropagation();
    this.props.notInsertingCardName();
  };

  onDeleteClick = () => {
    this.props.deleteCards(this.props.title);
    this.props.deleteList(this.props.title);
  };
  render() {
    return (
      <div className="lists-item" onClick={this.onListClick}>
        <div className="list-head">
          <h2 className="list-title">{this.props.title}</h2>
          <button onClick={this.onDeleteClick} className="button-icon">
            <i className="fas fa-times fa-2x"></i>
          </button>
        </div>
        <div className="cards">{this.renderCards()}</div>
        <CreateCard listName={this.props.title} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(
  mapStateToProps,
  { notInsertingCardName, deleteList, deleteCards }
)(List);
