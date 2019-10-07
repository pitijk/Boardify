import React from "react";
import { connect } from "react-redux";
import { showModal } from "../actions";

// passed through props: listId, id, name
class Card extends React.Component {
  //showModal = (cardId, listId)
  render() {
    return (
      <p
        onClick={() => this.props.showModal(this.props.id, this.props.listId)}
        className="card"
      >
        {this.props.name}
      </p>
    );
  }
}

export default connect(
  null,
  { showModal }
)(Card);
