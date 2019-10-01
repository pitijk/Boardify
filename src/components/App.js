import React from "react";
import List from "./List";
import CreateList from "./CreateList";
import { connect } from "react-redux";
import {
  notInsertingListName,
  toggleInsertingCardName,
  hideCard,
  showCard
} from "../actions";
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
    this.props.toggleInsertingCardName();
    this.props.hideCard();
  };
  render() {
    return (
      <div className="ui container" onClick={this.onAppClick}>
        <div className="ui horizontal list">
          {this.renderLists()}
          <CreateList />
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists, showing: state.showingCard.show };
};

export default connect(
  mapStateToProps,
  { notInsertingListName, toggleInsertingCardName, hideCard, showCard }
)(App);
