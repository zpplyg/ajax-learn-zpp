import React, { Component } from "react";
import fetchData from "./api/axiosUtil";
class AxiosFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "zhuzhuppx" };
    let that = this;
    fetchData(
      "get",
      "/getMsg",
      {},
      function(data) {
        console.log("fetch success!");
        console.log(data);
        that.setState({
          msg: data
        });
      },
      function(error) {
        console.log("fetch error:" + error);
      }
    );
  }
  render() {
    let { msg } = this.state;
    return <div className="AxiosFetch">{msg}</div>;
  }
}

export default AxiosFetch;
