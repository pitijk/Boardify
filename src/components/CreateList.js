import React from "react";
import { connect } from "react-redux";

import CreateForm from "./CreateForm";

class CreateList extends React.Component {
  render() {
    // props needed: formType, isInserting
    return (
      <div className="lists-item">
        <CreateForm formType={"list"} isInserting={this.props.isInserting} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isInserting: state.lists.length > 0 ? true : false };
};
export default connect(mapStateToProps)(CreateList);
