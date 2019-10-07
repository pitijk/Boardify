import React from "react";
import { connect } from "react-redux";
import { deleteList } from "../actions";

import CreateCard from "./CreateCard";
import Card from "./Card";

// passed through props: name, id
class List extends React.Component {
  renderCards() {
    if (this.props.cards) {
      return this.props.cards.map(({ id, name }) => {
        return <Card key={id} listId={this.props.id} id={id} name={name} />;
      });
    }
  }

  render() {
    return (
      <div className="lists-item">
        <div className="list-head">
          <h2 className="list-title">{this.props.name}</h2>
          <button
            onClick={() => this.props.deleteList(this.props.id)}
            className="button-icon"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
        <div className="cards">{this.renderCards()}</div>
        <CreateCard id={this.props.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.lists.filter(list => list.id === ownProps.id)[0].cards
  };
};

export default connect(
  mapStateToProps,
  { deleteList }
)(List);
