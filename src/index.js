import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import List from "./list";

import "./styles.css";

class Appication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "_______",
        age: "___",
        designation: "______________"
      }
    };
    this.getData = this.getData.bind(this);
  }

  getData(person) {
    this.setState(person);
  }

  render() {
    const { person } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <Form onSubmitData={this.getData} />
          <List />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Appication />, rootElement);
