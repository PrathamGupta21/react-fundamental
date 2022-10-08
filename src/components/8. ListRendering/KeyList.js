import React, { Component } from "react";

class KeyList extends Component {
  render() {
    const names = ["Pratham", "Shivang", "Tanmay", "Pratham"];
    const nameList = names.map((name, index) => (
      <h2 key={index}>
        {index} {name}
      </h2>
    ));
    return <div>{nameList}</div>;
  }
}

export default KeyList;
