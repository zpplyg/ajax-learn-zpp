import React, { Component } from "react";
import fetchData from "../api/axiosUtil";
class AxiosFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "zhuzhuppx" };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    var onSuccess = msg => {
      console.log("fetch success!");
      console.log(msg);
      this.setState({
        msg: msg
      });
    };
    var onError = error => {
      console.log("fetch error:" + error);
    };

    fetchData("get", "/getMsg", {}, onSuccess, onError);
  };
  render() {
    let { msg } = this.state;
    return <div className="AxiosFetch">{msg}</div>;
  }
}

export default AxiosFetch;
