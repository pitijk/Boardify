import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../actions";

import Modal from "react-modal";
import CardModal from "./CardModal";
import List from "./List";
import CreateList from "./CreateList";

Modal.setAppElement("#root");
class App extends React.Component {
  renderLists() {
    if (this.props.lists) {
      return this.props.lists.map(({ id, name }) => {
        return <List key={id} id={id} name={name} />;
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="lists">
          {this.renderLists()}
          <CreateList />
        </div>
        <Modal
          isOpen={this.props.isModalShowing}
          onRequestClose={this.props.hideModal}
          contentLabel="onRequestClose Example"
          className="Modal"
          overlayClassName="Overlay"
        >
          <CardModal />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists, isModalShowing: state.modal.isShowing };
};
export default connect(
  mapStateToProps,
  { hideModal }
)(App);
