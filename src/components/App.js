import React from "react";
import List from "./List";
import CreateList from "./CreateList";
import { connect } from "react-redux";
import { notInsertingListName, notInsertingCardName } from "../actions";
import CardModal from "./CardModal";

class App extends React.Component {
  renderLists() {
    return this.props.lists.map(list => {
      return <List key={list} title={list} />;
    });
  }
  renderModal() {
    if (this.props.showing) {
      return <CardModal />;
    }
  }
  onAppClick = () => {
    this.props.notInsertingListName();
    this.props.notInsertingCardName();
  };
  render() {
    return (
      <div className="container" onClick={this.onAppClick}>
        <div className="lists">
          {this.renderLists()}
          <CreateList />
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists, showing: state.modalCard.isShowing };
};

export default connect(
  mapStateToProps,
  { notInsertingListName, notInsertingCardName }
)(App);
