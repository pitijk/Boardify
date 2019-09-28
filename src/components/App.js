import React from "react";
import List from "./List";
import { createList } from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
        <button
          onClick={() => {
            this.props.createList("lista");
          }}
        >
          + Create another list
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(
  mapStateToProps,
  { createList }
)(App);
