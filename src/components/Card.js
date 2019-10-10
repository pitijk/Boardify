import React from "react";
import { connect } from "react-redux";
import { showModal } from "../actions";
import { Draggable } from "react-beautiful-dnd";

// passed through props: listId, id, name, index
class Card extends React.Component {
  //showModal = (cardId, listId)
  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {({ innerRef, draggableProps, dragHandleProps }) => (
          <div ref={innerRef} {...draggableProps} {...dragHandleProps}>
            <p
              onClick={() =>
                this.props.showModal(this.props.id, this.props.listId)
              }
              className="card"
            >
              {this.props.name}
            </p>
          </div>
        )}
      </Draggable>
    );
  }
}

export default connect(
  null,
  { showModal }
)(Card);
