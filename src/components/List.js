import React from "react";
import { connect } from "react-redux";
import { deleteList } from "../actions";
import { Droppable, Draggable } from "react-beautiful-dnd";

import CreateForm from "./CreateForm";
import Card from "./Card";

// passed through props: name, id, index
class List extends React.Component {
  renderCards() {
    if (this.props.cards) {
      return this.props.cards.map(({ id, name }, index) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            listId={this.props.id}
            index={index}
          />
        );
      });
    }
  }

  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {provided => (
          <div
            className="lists-item"
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <div className="list-head">
              <h2 className="list-title">{this.props.name}</h2>
              <button
                onClick={() => this.props.deleteList(this.props.id)}
                className="button-icon"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
            <Droppable droppableId={this.props.id}>
              {provided => (
                <div
                  className="cards"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {this.renderCards()}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="create-card">
              <CreateForm formType="card" listId={this.props.id} />
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.lists.find(list => list.id === ownProps.id).cards
  };
};

export default connect(
  mapStateToProps,
  { deleteList }
)(List);
