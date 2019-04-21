import React, { Component } from "react";
import "./App.css";

// import AxiosFetch from "../pages/AxiosFetch";
// import AxiosFetchArray from "../pages/AxiosFetchArray";
// import UserList from "../pages/UserList";
import TableList from "../pages/TableList"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AxiosFetch /> */}
        {/* <AxiosFetchArray /> */}
        {/* <UserList></UserList> */}
        <TableList />
      </div>
    );
  }
}

export default App;
