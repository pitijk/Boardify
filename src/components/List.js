import React from "react";
import CreateCard from "./CreateCard";
import Card from "./Card";
import { connect } from "react-redux";
import { toggleInsertingCardName, deleteList } from "../actions";

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
        <div className="ui grid">
          <h2 className="twelve wide column">{this.props.title}</h2>
          <button
            onClick={() => this.props.deleteList(this.props.title)}
            className="ui icon button"
          >
            <i className="trash icon"></i>
          </button>
        </div>

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
  { toggleInsertingCardName, deleteList }
)(List);
