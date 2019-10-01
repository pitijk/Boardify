import React from "react";
import List from "./List";
import CreateList from "./CreateList";
import { connect } from "react-redux";
import { notInsertingListName, toggleInsertingCardName } from "../actions";

class App extends React.Component {
  renderLists() {
    return this.props.lists.map(list => {
      return <List key={list} title={list} />;
    });
  }
  onAppClick = () => {
    this.props.notInsertingListName();
    this.props.toggleInsertingCardName();
  };
  render() {
    return (
      <div className="ui container" onClick={this.onAppClick}>
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
  { notInsertingListName, toggleInsertingCardName }
)(App);
