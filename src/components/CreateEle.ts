import React, {Component, createElement} from "react";

// const element = createElement(type, props, ...children)


function CreateEle() {
 return createElement(
  "div",
  null,
  createElement("h1", { className: "title" }, "Hello"),
  createElement("p", null, "Welcome")
)
}


export default CreateEle;




































// import React, { Component } from "react";

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   render() {
//     return (
//       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         Count: {this.state.count}
//       </button>
//     );
//   }
// }