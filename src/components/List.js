import React from "react";
import CreateCard from "./CreateCard";
import Card from "./Card";
import { connect } from "react-redux";
import { toggleInsertingCardName } from "../actions";

class List extends React.Component {
  renderCards() {
    const listsCards = this.props.cards.filter(
      card => card.insideOfList === this.props.title
    );
    return listsCards.map(card => {
      return <Card key={card.title} title={card.title} />;
    });
  }
  onListClick = event => {
    event.stopPropagation();
    this.props.toggleInsertingCardName();
  };
  render() {
    return (
      <div className="ui placeholder segment item" onClick={this.onListClick}>
        <h2>{this.props.title}</h2>
        <div className="ui divided relaxed list">{this.renderCards()}</div>
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
  { toggleInsertingCardName }
)(List);
