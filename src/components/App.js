import React from "react";
import List from "./List";
import CreateList from "./CreateList";
import { connect } from "react-redux";
import { toggleInsertingListName } from "../actions";

class App extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.toggleInsertingListName()}
        className="ui container"
      >
        <List />
        <CreateList />
      </div>
    );
  }
}

export default connect(
  null,
  { toggleInsertingListName }
)(App);
