import React, { Component } from "react";
import fetchData from "../api/axiosUtil";
class AddOrModify extends Component { 
  render() {
    let { name, age, phone, avator } = this.props.item;
 
    return (
      <span className="array-item">
        <img className="avator" src={avator} alt="图片" />
        <span className="user-info">
          <span >姓名：{name}</span>
          <span >年龄 :{age}</span>
          <span > 手机：{phone}</span>
        </span>
      </span>
    );
  }
}
export default AddOrModify;
