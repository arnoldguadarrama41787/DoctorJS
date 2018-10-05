import axios from "axios";
import React from "react";



class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Item'};

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleUpload(event) {
    alert('Thank you:' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div className = "data">
      <form onSubmit={this.props.handleUpload}>
        <label className = "data">
      Blood Pressure Per Minute:<input type="text" name="name" />
        <input type="submit" value="Submit" />
        </label>
        </form>

        </div>
      );
    }
  }


export default Upload;
