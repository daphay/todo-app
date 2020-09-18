import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      alert("Your todo cannot be empty");
      return false;
    } else{
        this.props.addTodoProp(this.state.title);
        this.setState({
          title: "",
        });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Enter Todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type = "submit"  className="input-submit" value ="submit" />
        {/* <button type="button" className="input-submit">
          submit
        </button> */}
      </form>
    );
  }
}

export default InputTodo;
