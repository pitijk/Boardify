import React from "react";
import { connect } from "react-redux";

import CreateForm from "./CreateForm";

// passed through props: id
class CreateCard extends React.Component {
  render() {
    // props needed: formType, isInserting, listId
    return (
      <div className="create-card">
        <CreateForm
          formType={"card"}
          isInserting={this.props.isInserting}
          listId={this.props.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isInserting:
      state.lists.find(list => list.id === ownProps.id).cards.length > 0
        ? true
        : false
  };
};
export default connect(mapStateToProps)(CreateCard);
