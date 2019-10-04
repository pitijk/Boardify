import React from "react";
// Needed Props List: formType, inserting, input, toggleInserting(), handleSubmit(), inputActionCreator()
class CreateForm extends React.Component {
  renderCreateForm() {
    if (!this.props.inserting) {
      return (
        <button className="button-toggle" onClick={this.props.onClick}>
          {`+ Add another ${this.props.formType}`}
        </button>
      );
    } else {
      return (
        <form onSubmit={this.props.handleSubmit} className="create-form">
          <input
            onChange={e => this.props.inputActionCreator(e.target.value)}
            type="text"
            placeholder={`Enter ${this.props.formType} title...`}
            value={this.props.input}
            className="input"
          />
          <button
            onClick={this.props.handleSubmit}
            className="button"
          >{`Add ${this.props.formType}`}</button>
        </form>
      );
    }
  }
  render() {
    return <>{this.renderCreateForm()}</>;
  }
}

export default CreateForm;
