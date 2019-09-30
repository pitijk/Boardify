import React from "react";
// Needed Props List: formType, inserting, input, toggleInserting(), handleSubmit(), inputActionCreator()
class CreateForm extends React.Component {
  renderCreateForm() {
    if (!this.props.inserting) {
      return (
        <button className="ui button" onClick={this.props.onClick}>
          {`+ Create another ${this.props.formType}`}
        </button>
      );
    } else {
      return (
        <form onSubmit={this.props.handleSubmit} className="ui action input">
          <input
            onChange={e => this.props.inputActionCreator(e.target.value)}
            type="text"
            placeholder={`Enter ${this.props.formType} title...`}
            value={this.props.input}
          />
          <input
            value={`+ Add ${this.props.formType}`}
            type="submit"
            className="ui button green"
          />
        </form>
      );
    }
  }
  render() {
    return (
      <div className="item" onClick={e => e.stopPropagation()}>
        {this.renderCreateForm()}
      </div>
    );
  }
}

export default CreateForm;
