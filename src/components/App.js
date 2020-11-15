import React, { Component, useState } from "react";
class App extends Component {
  render() {
    const relativeList = [
      { description: "When will you come?", key: "relativeListItem1" },
      { description: "Saurabh Mama", key: "relativeListItem2" },
      { description: "Gaurav Mama", key: "relativeListItem3" }
    ];

    return (
      <ol key={"relativeList"}>
        {relativeList.map((question, key) => {
          return <li key={question.key}>{question.description}</li>;
        })}
      </ol>
    );
  }
}
export default App;
