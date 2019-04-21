import React, { Component } from "react";
import fetchData from "../api/axiosUtil";
import randomColor from "randomcolor";
class AxiosFetchArray extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetchData(
      "get",
      "/getSimpleList",
      {},
      list => {
        console.log("fetch success!");
        console.log(list);
        this.setState({
          list: list
        });
      },
      error => {
        console.log("fetch error:" + error);
      }
    );
  };
  ramdomColor = () => {
    return randomColor();
  };
  render() {
    let { list } = this.state;
    let { ramdomColor } = this;
    return (
      <div className="AxiosFetchArray">
        {list.map(i => {
          return <span className="array-item"  style={{ color: ramdomColor() }}>{i}</span>;
        })}
      </div>
    );
  }
}

export default AxiosFetchArray;
