const arr = [1, 2, 3]
console.log('Hello from webpack')
console.log(...arr)

/**
 * Hot reloading module
 */

if (module.hot) {
  module.hot.accept();
}

import React from "react";
import ReactDOM from "react-dom";

import App from './components/App';

ReactDOM.render(<App />, document.getElementById("root"));