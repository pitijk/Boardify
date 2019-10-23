import React from "react";

class SuperP extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.className}>
        {this.props.text.split("\n").map((i, key) => {
          return (
            <p className="superP" key={key}>
              {i}
            </p>
          );
        })}
      </div>
    );
  }
}

export default SuperP;
