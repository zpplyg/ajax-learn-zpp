import React, { Component } from "react";
import randomColor from "randomcolor";
import fetchData from "../api/axiosUtil";
class UserItem extends Component {
  ramdomColor = () => {
    return randomColor();
  };
  deleteItem = () => {
    let { id, name, age, phone, avator } = this.props.item;
    fetchData(
      "get",
      "/deleteUser",
      { id: id },
      result => {
        alert("delete success");
        this.props.reload();
      },
      error => {
        console.log("fetch error:" + error);
      }
    );
  };
  editItem = () => {
    let item = this.props.item;
    this.props.editItem(item);
  };
  render() {
    let { name, age, phone, avator } = this.props.item;
    let { ramdomColor } = this;
    let { deleteItem, editItem } = this;
    return (
      <span className="array-item">
        <img className="avator" src={avator} alt="图片" />
        <span className="user-info">
          <span style={{ color: ramdomColor() }}>姓名：{name}</span>
          <span style={{ color: ramdomColor() }}>年龄 :{age}</span>
          <span style={{ color: ramdomColor() }}> 手机：{phone}</span>
        </span>
        <span className="opt">
          <span onClick={deleteItem}>删除</span>
          <span onClick={editItem}>编辑</span>
        </span>
      </span>
    );
  }
}
export default UserItem;
