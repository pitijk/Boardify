import React from "react";

class Card extends React.Component {
  render() {
    return <div className="item">{this.props.title}</div>;
  }
}

export default Card;
