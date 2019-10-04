import React from "react";
import { connect } from "react-redux";
import { showModalCard } from "../actions";

class Card extends React.Component {
  onClick = () => {
    this.props.showModalCard(this.props.title);
    document.body.classList.add("modal-up");
  };
  render() {
    return (
      <p onClick={this.onClick} className="card">
        {this.props.title}
      </p>
    );
  }
}

export default connect(
  null,
  { showModalCard }
)(Card);
