import React from "react";
import { connect } from "react-redux";
import { hideModal, editCardPosition } from "../actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Modal from "react-modal";
import CardModal from "./CardModal";
import List from "./List";
import CreateForm from "./CreateForm";

Modal.setAppElement("#root");
class App extends React.Component {
  renderLists() {
    if (this.props.lists) {
      return this.props.lists.map(({ id, name }, index) => {
        return <List key={id} id={id} name={name} index={index} />;
      });
    }
  }
  onDragEnd = result => {
    const { destination, source, type } = result;
    // startingListId, endingListId, startingIndex, endingIndex
    if (!destination) {
      return;
    }
    this.props.editCardPosition(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      type
    );
  };
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <div
                className="lists"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.renderLists()}
                {provided.placeholder}
                <div className="lists-item">
                  <CreateForm formType="list" />
                </div>
              </div>
            )}
          </Droppable>
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
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists,
    isModalShowing: state.modal.isShowing
  };
};
export default connect(
  mapStateToProps,
  { hideModal, editCardPosition }
)(App);
