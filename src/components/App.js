import React from "react";
import List from "./List";
import CreateList from "./CreateList";
import { connect } from "react-redux";
import { toggleInsertingListName } from "../actions";

class App extends React.Component {
  renderLists() {
    return this.props.lists.map(list => {
      return <List key={list} title={list} />;
    });
  }
  render() {
    return (
      <div
        className="ui container"
        onClick={() => this.props.toggleInsertingListName()}
      >
        <div className="ui horizontal list">
          {this.renderLists()}
          <CreateList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(
  mapStateToProps,
  { toggleInsertingListName }
)(App);
