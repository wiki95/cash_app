import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// noopservice worker in node_modules/ react-dev-utils/ line 14 should be like this
//if (req.url === path.join(String(servedPath), 'service-worker.js')) {
