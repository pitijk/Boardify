import React from "react";
import { connect } from "react-redux";
import { showModalCard } from "../actions";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={() => this.props.showModalCard(this.props.title)}
          className="item"
        >
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { showModalCard }
)(Card);
