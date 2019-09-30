import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="ui placeholder segment item">{this.props.title}</div>
    );
  }
}

export default List;
