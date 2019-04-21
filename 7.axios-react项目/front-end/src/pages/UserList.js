import React, { Component } from "react";
import fetchData from "../api/axiosUtil";
import UserItem from "./UserItem";
class UserList extends Component {
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
      "/getUserList",
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
  editItem = (item)=>{
    console.log(item)
  }
  render() {
    let { list } = this.state;
    let { getData, editItem } = this;
    return (
      <div className="UserList">
        {list.map((i, index) => {
          return (
            <UserItem
              key={index}
              item={i}
              reload={getData}
              editItem={editItem}
            />
          );
        })}
      </div>
    );
  }
}
export default UserList;
