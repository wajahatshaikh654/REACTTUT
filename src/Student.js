import React from "react";

class Student extends React.Component {
  render() {
    console.warn(this.props);
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Student;
